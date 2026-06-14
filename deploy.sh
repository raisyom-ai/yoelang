#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# YOELANG — Déploiement sur Vercel + Turso
# ═══════════════════════════════════════════════════════════════════════════
#
# PRÉREQUIS :
#   1. Un compte Vercel (https://vercel.com) — gratuit
#   2. Un compte Turso (https://turso.tech) — gratuit (9 Go)
#   3. Les CLIs installées : vercel, turso
#
# ÉTAPES :
#   1. Installer Turso CLI : curl -sSfL https://get.tur.so/install.sh | bash
#   2. Se connecter : turso auth login
#   3. Créer la DB : turso db create yoelang
#   4. Récupérer les credentials : turso db show yoelang --url
#   5. Se connecter à Vercel : vercel login
#   6. Configurer les variables d'environnement (voir ci-dessous)
#   7. Déployer : vercel --prod
#
# ═══════════════════════════════════════════════════════════════════════════

set -e

echo "🚀 YOELANG — Déploiement Vercel + Turso"
echo ""

# ─── Vérifier les prérequis ────────────────────────────────────────────
command -v vercel >/dev/null 2>&1 || { echo "❌ Vercel CLI non installé. Installez-le : npm i -g vercel"; exit 1; }
command -v turso >/dev/null 2>&1 || { echo "⚠️  Turso CLI non installé. Optionnel si vous utilisez SQLite local."; }

# ─── Demander le nom du projet ─────────────────────────────────────────
PROJECT_NAME="yoelang"
read -p "Nom du projet Vercel [yoelang] : " input_name
PROJECT_NAME="${input_name:-$PROJECT_NAME}"

echo ""
echo "📦 Déploiement de $PROJECT_NAME sur Vercel..."
echo ""

# ─── Déployer sur Vercel ───────────────────────────────────────────────
vercel --prod --yes

echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "🔧 VARIABLES D'ENVIRONNEMENT À CONFIGURER SUR VERCEL :"
echo "   Dashboard → Settings → Environment Variables"
echo ""
echo "   DATABASE_URL      = file:/home/z/my-project/db/custom.db  (local) ou libsql://...  (Turso)"
echo "   NEXTAUTH_SECRET   = $(openssl rand -base64 32)"
echo "   NEXTAUTH_URL      = https://VOTRE-PROJET.vercel.app"
echo "   ADMIN_PASSWORD    = votre-mot-de-passe-admin"
echo "   WEBHOOK_SECRET    = $(openssl rand -base64 32)"
echo ""
echo "   Si vous utilisez Turso :"
echo "   LIBSQL_URL        = libsql://yoelang-XXX.turso.io"
echo "   LIBSQL_AUTH_TOKEN = votre-token-turso"
echo ""
echo "🎯 Prochaines étapes :"
echo "   1. Configurez les variables d'environnement sur Vercel"
echo "   2. Redéployez : vercel --prod"
echo "   3. Testez votre app sur l'URL fournie"
echo "   4. Ajoutez un domaine personnalisé dans Vercel Dashboard"
