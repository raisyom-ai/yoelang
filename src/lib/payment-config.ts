/**
 * Payment Configuration for Yoel App
 * 
 * This file contains the owner's payment receiving numbers.
 * Update these with your actual Orange Money and Wave numbers.
 * 
 * HOW IT WORKS:
 * 1. The learner sees these numbers in the checkout
 * 2. They send money directly to your account
 * 3. They enter the transaction reference/code in the app
 * 4. You verify and approve the payment from the admin panel
 */

export interface PaymentAccount {
  method: string
  label: string
  number: string
  displayNumber: string
  icon: string
  color: string
  bg: string
  borderColor: string
  ussdCode?: string
  instructions: string[]
}

export const PAYMENT_ACCOUNTS: PaymentAccount[] = [
  {
    method: 'orange_money',
    label: 'Orange Money',
    number: '0777530173',
    displayNumber: '077 75 30 17 3',
    icon: '🟠',
    color: 'text-orange-600',
    bg: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    ussdCode: '#144#',
    instructions: [
      'Composez #144# sur votre téléphone',
      'Sélectionnez "Transfert d\'argent"',
      'Entrez le numéro du destinataire',
      'Saisissez le montant',
      'Confirmez avec votre code PIN',
      'Notez le code de transaction reçu par SMS',
    ],
  },
  {
    method: 'wave',
    label: 'Wave',
    number: '0777530173',
    displayNumber: '077 75 30 17 3',
    icon: '🔵',
    color: 'text-blue-600',
    bg: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    instructions: [
      'Ouvrez l\'application Wave',
      'Appuyez sur "Envoyer"',
      'Sélectionnez le contact ou entrez le numéro',
      'Saisissez le montant',
      'Confirmez le transfert',
      'Notez la référence de transaction',
    ],
  },
]

/**
 * Admin configuration
 * This password protects the admin panel for payment validation.
 * ⚠️ CHANGE THIS IN PRODUCTION!
 */
export const ADMIN_CONFIG = {
  password: 'yoel2025', // ⚠️ Changez ce mot de passe en production
}

/**
 * Plan pricing in FCFA
 */
export const PLAN_PRICES: Record<string, { amount: number; name: string; period: string }> = {
  essentiel: { amount: 1000, name: 'Essentiel', period: 'F/mois' },
  complet: { amount: 2000, name: 'Complet', period: 'F/trimestre' },
  integral: { amount: 3000, name: 'Intégral', period: 'F' },
}
