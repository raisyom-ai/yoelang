'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Home, User, GraduationCap, Bell, Palette, Crown,
  HelpCircle, Trash2, ChevronRight, Shield, Moon, Sun,
  Mail, MessageSquare, Volume2, Star, Lock, Globe
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function SettingsPage() {
  const { user, goBack, navigate, isDarkMode, toggleDarkMode } = useAppStore()

  const displayName = user?.name ?? 'Apprenant'
  const email = user?.email ?? 'apprenant@yoelang.com'
  const isPremium = user?.isPremium ?? false
  const dailyGoal = user?.dailyGoal ?? 20
  const notifications = user?.notifications ?? true
  const soundEnabled = user?.soundEnabled ?? true

  const [localGoal, setLocalGoal] = useState(String(dailyGoal))
  const [localNotif, setLocalNotif] = useState(notifications)
  const [localEmail, setLocalEmail] = useState(true)
  const [localSound, setLocalSound] = useState(soundEnabled)
  const [localLang, setLocalLang] = useState('fr')

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="mx-auto max-w-4xl space-y-6 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Top Bar ──────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={goBack} className="shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('dashboard')} className="shrink-0 text-muted-foreground hover:text-yoel-primary">
            <Home className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold gradient-text-primary">Paramètres</h1>
        </motion.div>

        {/* ─── Compte ──────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <User className="h-5 w-5 text-yoel-primary" />
                Compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Nom</p>
                  <p className="text-sm text-muted-foreground">{displayName}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  <Shield className="h-3 w-3 mr-1" />
                  Modifier
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{email}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  <Shield className="h-3 w-3 mr-1" />
                  Modifier
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Mot de passe</p>
                  <p className="text-sm text-muted-foreground">••••••••</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  <Lock className="h-3 w-3 mr-1" />
                  Changer
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Apprentissage ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-yoel-blue" />
                Apprentissage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Objectif quotidien</p>
                  <p className="text-xs text-muted-foreground">XP à gagner par jour</p>
                </div>
                <Select value={localGoal} onValueChange={setLocalGoal}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 XP</SelectItem>
                    <SelectItem value="20">20 XP</SelectItem>
                    <SelectItem value="30">30 XP</SelectItem>
                    <SelectItem value="50">50 XP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Niveau préféré</p>
                  <p className="text-xs text-muted-foreground">Niveau d&apos;apprentissage actuel</p>
                </div>
                <Select defaultValue="A1">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A1">A1</SelectItem>
                    <SelectItem value="A2">A2</SelectItem>
                    <SelectItem value="B1">B1</SelectItem>
                    <SelectItem value="B2">B2</SelectItem>
                    <SelectItem value="C1">C1</SelectItem>
                    <SelectItem value="C2">C2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Notifications ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Bell className="h-5 w-5 text-yoel-gold" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Notifications push</p>
                  <p className="text-xs text-muted-foreground">Rappels et alertes</p>
                </div>
                <Switch checked={localNotif} onCheckedChange={setLocalNotif} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Rappels par email</p>
                  <p className="text-xs text-muted-foreground">Recevez des rappels quotidiens</p>
                </div>
                <Switch checked={localEmail} onCheckedChange={setLocalEmail} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Effets sonores</p>
                  <p className="text-xs text-muted-foreground">Sons de l&apos;application</p>
                </div>
                <Switch checked={localSound} onCheckedChange={setLocalSound} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Apparence ───────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-500" />
                Apparence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isDarkMode ? (
                    <Moon className="h-5 w-5 text-yoel-blue" />
                  ) : (
                    <Sun className="h-5 w-5 text-yoel-gold" />
                  )}
                  <div>
                    <p className="text-sm font-medium">Mode sombre</p>
                    <p className="text-xs text-muted-foreground">
                      {isDarkMode ? 'Activé' : 'Désactivé'}
                    </p>
                  </div>
                </div>
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-yoel-green" />
                  <div>
                    <p className="text-sm font-medium">Langue</p>
                    <p className="text-xs text-muted-foreground">Langue de l&apos;interface</p>
                  </div>
                </div>
                <Select value={localLang} onValueChange={setLocalLang}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Abonnement ──────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yoel-gold" />
                  Abonnement
                </CardTitle>
                {isPremium && (
                  <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-xs">
                    <Star className="h-3 w-3 mr-1 fill-yoel-gold" />
                    Premium
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Plan actuel</p>
                  <p className="text-sm text-muted-foreground">
                    {isPremium ? 'YOELANG Premium' : 'Gratuit'}
                  </p>
                </div>
              </div>
              <Separator />
              <Button
                className="w-full rounded-xl bg-gradient-to-r from-yoel-primary to-yoel-gold text-white hover:opacity-90"
                onClick={() => navigate('premium')}
              >
                {isPremium ? (
                  <>
                    <Crown className="h-4 w-4 mr-2" />
                    Gérer l&apos;abonnement
                  </>
                ) : (
                  <>
                    <Crown className="h-4 w-4 mr-2" />
                    Passer Premium
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Aide ────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-yoel-green" />
                Aide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <button className="flex w-full items-center justify-between rounded-xl p-3 transition-colors hover:bg-muted/30">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">FAQ</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="flex w-full items-center justify-between rounded-xl p-3 transition-colors hover:bg-muted/30">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Contacter le support</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="flex w-full items-center justify-between rounded-xl p-3 transition-colors hover:bg-muted/30">
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Évaluer l&apos;application</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Danger Zone ─────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="border border-destructive/20 bg-destructive/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2 text-destructive">
                <Trash2 className="h-5 w-5" />
                Zone danger
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-destructive">Supprimer le compte</p>
                  <p className="text-xs text-muted-foreground">
                    Cette action est irréversible
                  </p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm" className="rounded-lg">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Supprimer
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Cette action est irréversible. Toutes vos données, votre progression,
                        vos badges et votre abonnement seront définitivement supprimés.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Supprimer définitivement
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Version info */}
        <motion.div variants={itemVariants} className="text-center pb-4">
          <p className="text-xs text-muted-foreground">YOELANG v1.0.0</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
