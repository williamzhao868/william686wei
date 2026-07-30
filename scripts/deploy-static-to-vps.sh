#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 root@YOUR_SERVER_IP"
  exit 1
fi

TARGET="$1"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"
npm ci
npm run build --workspace apps/web

rsync -avz --delete dist/apps/web/ "$TARGET:/var/www/engma-ailab/"

echo "OK: deployed Engma-AILab to $TARGET:/var/www/engma-ailab/"
