# Engma-AILab VPS Deployment Guide

This project can be deployed as a static Vite/React site. The current frontend includes local JSON fallback data and PDF assets under `apps/web/public`, so PocketBase/API are optional for the first production deployment.

## Recommended VPS

- Ubuntu 24.04 LTS
- 1 vCPU / 1 GB RAM minimum
- 20 GB disk minimum
- Recommended regions: Singapore or Tokyo
- Open ports: 22, 80, 443

## Local Build

Run these commands on your Mac:

```bash
cd /Users/will/Desktop/Engma/EngmaAILab/horizons-export-b28ea7ca-961f-4e44-8fef-0dda445d1017
npm ci
npm run build --workspace apps/web
```

The deployable static site will be generated at:

```text
dist/apps/web
```

## Upload To VPS

Replace `YOUR_SERVER_IP` with your VPS IP:

```bash
rsync -avz --delete dist/apps/web/ root@YOUR_SERVER_IP:/var/www/engma-ailab/
```

## VPS Setup

SSH into the VPS:

```bash
ssh root@YOUR_SERVER_IP
```

Install Nginx:

```bash
apt update
apt install -y nginx
mkdir -p /var/www/engma-ailab
```

Create Nginx config:

```bash
cat >/etc/nginx/sites-available/engma-ailab <<'EOF'
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

ln -sf /etc/nginx/sites-available/engma-ailab /etc/nginx/sites-enabled/engma-ailab
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

Then open:

```text
http://YOUR_SERVER_IP
```

## Optional Domain + HTTPS

After pointing your domain A record to the VPS IP:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d YOUR_DOMAIN
```

## Important Project Details

- Web app path: `apps/web`
- Build command: `npm run build --workspace apps/web`
- Static output: `dist/apps/web`
- PDF assets: `apps/web/public/reports/pdf`
- Generated cover assets: `apps/web/public/generated`
- Main content data: `apps/web/src/data/Hostinger_A_C_Content_Data.json`
- PocketBase client path: `apps/web/src/lib/pocketbaseClient.js`
- PocketBase fallback is enabled. If `/hcgi/platform` is unavailable, the frontend falls back to local article/tool data.

## Optional Backend Services

These are not required for the first static deployment.

- API app: `apps/api`
- API default port: `3001`
- API env file: `apps/api/.env`
- PocketBase app: `apps/pocketbase`
- PocketBase default port: `8090`

If you later need live admin editing or database-backed content, deploy PocketBase and reverse proxy `/hcgi/platform` to PocketBase or adapt `apps/web/src/lib/pocketbaseClient.js`.
