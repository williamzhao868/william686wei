#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/engma-ailab"
SITE_CONF="/etc/nginx/sites-available/engma-ailab"

export DEBIAN_FRONTEND=noninteractive

apt update
apt install -y nginx openssh-server ufw curl rsync ca-certificates

mkdir -p "$APP_DIR"
chown -R www-data:www-data "$APP_DIR"

systemctl enable --now ssh
systemctl enable --now nginx

if command -v ufw >/dev/null 2>&1; then
  ufw allow OpenSSH || true
  ufw allow 'Nginx Full' || true
  yes | ufw enable || true
fi

cat >"$SITE_CONF" <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name _;

    root /var/www/engma-ailab;
    index index.html;

    client_max_body_size 50m;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /reports/pdf/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=3600";
    }

    location /generated/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=3600";
    }
}
EOF

ln -sf "$SITE_CONF" /etc/nginx/sites-enabled/engma-ailab
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

cat >/var/www/engma-ailab/index.html <<'EOF'
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Engma-AILab VPS Ready</title>
  </head>
  <body style="font-family: system-ui, sans-serif; padding: 40px;">
    <h1>Engma-AILab VPS is ready.</h1>
    <p>Nginx is running. Upload the built site to /var/www/engma-ailab.</p>
  </body>
</html>
EOF
chown www-data:www-data /var/www/engma-ailab/index.html

echo "OK: VPS initialized for Engma-AILab."
echo "Open: http://$(curl -fsS ifconfig.me || hostname -I | awk '{print $1}')"
