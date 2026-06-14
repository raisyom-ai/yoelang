'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Home, User, GraduationCap, Bell, Palette, Crown,
  HelpCircle, Trash2, ChevronRight, Shield, Moon, Sun,
  Mail, MessageSquare, Volume2, Star, Lock, Globe,
  Camera, Check, Loader2, Eye, EyeOff
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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
    transition: { type: 'spring' as const, stiffness: 260, damping: 24 },
  },
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function SettingsPage() {
  const { user, goBack, navigate, isDarkMode, toggleDarkMode, setDailyGoal, setUser } = useAppStore()

  const displayName = user?.name ?? 'Apprenant'
  const email = user?.email ?? 'apprenant@yoelang.com'
  const isPremium = user?.isPremium ?? false
  const dailyGoal = user?.dailyGoal ?? 0
  const notifications = user?.notifications ?? true
  const soundEnabled = user?.soundEnabled ?? true

  const [localGoal, setLocalGoal] = useState(String(dailyGoal))
  const [localNotif, setLocalNotif] = useState(notifications)
  const [localEmail, setLocalEmail] = useState(true)
  const [localSound, setLocalSound] = useState(soundEnabled)
  const [localLang, setLocalLang] = useState('fr')

  // ─── Profile Edit State ────────────────────────────────────────────────
  const [editName, setEditName] = useState(displayName)
  const [isNameDialogOpen, setIsNameDialogOpen] = useState(false)
  const [isSavingName, setIsSavingName] = useState(false)

  // ─── Password Change State ─────────────────────────────────────────────
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  // ─── Avatar Upload State ───────────────────────────────────────────────
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false)

  // Sync daily goal changes to the store
  const handleGoalChange = (value: string) => {
    setLocalGoal(value)
    setDailyGoal(Number(value))
  }

  const dailyGoalLabel = dailyGoal === 0 ? 'Auto' : `${dailyGoal} XP`

  // ─── Handle Name Change ────────────────────────────────────────────────
  const handleNameSave = async () => {
    if (!user || !editName.trim()) return
    setIsSavingName(true)
    try {
      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, name: editName.trim() }),
      })
      const data = await res.json()
      if (data.success) {
        setUser({ ...user, name: editName.trim() })
        setIsNameDialogOpen(false)
      }
    } catch (error) {
      console.error('Name update error:', error)
    } finally {
      setIsSavingName(false)
    }
  }

  // ─── Handle Password Change ────────────────────────────────────────────
  const handlePasswordChange = async () => {
    setPasswordError('')
    setPasswordSuccess(false)

    if (!user) return

    if (!currentPassword) {
      setPasswordError('Veuillez entrer votre mot de passe actuel')
      return
    }

    if (newPassword.length < 6) {
      setPasswordError('Le nouveau mot de passe doit contenir au moins 6 caractères')
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Les mots de passe ne correspondent pas')
      return
    }

    setIsChangingPassword(true)
    try {
      const res = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          currentPassword,
          newPassword,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setPasswordSuccess(true)
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
        setTimeout(() => {
          setIsPasswordDialogOpen(false)
          setPasswordSuccess(false)
        }, 1500)
      } else {
        setPasswordError(data.error || 'Erreur lors du changement de mot de passe')
      }
    } catch {
      setPasswordError('Erreur de connexion au serveur')
    } finally {
      setIsChangingPassword(false)
    }
  }

  // ─── Handle Avatar Upload ──────────────────────────────────────────────
  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleAvatarFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user) return

    // Validate file
    if (!file.type.startsWith('image/')) {
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      return // Max 5MB
    }

    setIsUploadingAvatar(true)
    try {
      const formData = new FormData()
      formData.append('avatar', file)
      formData.append('userId', user.id)

      const res = await fetch('/api/user/avatar', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success && data.avatarUrl) {
        setUser({ ...user, avatar: data.avatarUrl })
      }
    } catch (error) {
      console.error('Avatar upload error:', error)
    } finally {
      setIsUploadingAvatar(false)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

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
          <Button variant="outline" size="sm" onClick={goBack} className="shrink-0 rounded-full gap-1.5 border-yoel-primary/20 hover:bg-yoel-primary/5 hover:border-yoel-primary/40 transition-all">
            <ArrowLeft className="h-4 w-4 text-yoel-primary" />
            <span className="text-xs font-medium text-yoel-primary">Retour</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('dashboard')} className="shrink-0 text-muted-foreground hover:text-yoel-primary">
            <Home className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold gradient-text-primary">Paramètres</h1>
        </motion.div>

        {/* ─── Avatar & Profile Photo ──────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <Avatar className="h-20 w-20 ring-4 ring-yoel-primary/20 transition-all group-hover:ring-yoel-primary/40">
                    <AvatarImage src={user?.avatar ?? undefined} alt={displayName} />
                    <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-bold text-2xl">
                      {displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <button
                    onClick={handleAvatarClick}
                    disabled={isUploadingAvatar}
                    className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 transition-all group-hover:bg-black/40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isUploadingAvatar ? (
                      <Loader2 className="h-6 w-6 text-white animate-spin" />
                    ) : (
                      <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarFileChange}
                    className="hidden"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{displayName}</h3>
                  <p className="text-sm text-muted-foreground">{email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {isPremium && (
                      <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-xs">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                    <Badge variant="secondary" className="text-xs">
                      {user?.level ?? 'A1'}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2">
                    Cliquez sur la photo pour la changer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Compte ──────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <User className="h-5 w-5 text-yoel-primary" />
                Compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Name */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Nom</p>
                  <p className="text-sm text-muted-foreground">{displayName}</p>
                </div>
                <Dialog open={isNameDialogOpen} onOpenChange={setIsNameDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                      <Shield className="h-3 w-3 mr-1" />
                      Modifier
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Modifier votre nom</DialogTitle>
                      <DialogDescription>
                        Ce nom sera affiché sur votre profil et dans l&apos;application.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <Label htmlFor="name" className="text-sm font-medium">Nouveau nom</Label>
                      <Input
                        id="name"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="mt-2"
                        placeholder="Votre nom"
                        onKeyDown={(e) => { if (e.key === 'Enter') handleNameSave() }}
                      />
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsNameDialogOpen(false)}>
                        Annuler
                      </Button>
                      <Button
                        onClick={handleNameSave}
                        disabled={isSavingName || !editName.trim()}
                        className="bg-yoel-primary hover:bg-yoel-primary/90 text-white"
                      >
                        {isSavingName ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-1" />
                        ) : (
                          <Check className="h-4 w-4 mr-1" />
                        )}
                        Enregistrer
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <Separator />
              {/* Email */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{email}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  <Mail className="h-3 w-3 mr-1" />
                  Vérifié
                </Badge>
              </div>
              <Separator />
              {/* Password */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Mot de passe</p>
                  <p className="text-sm text-muted-foreground">••••••••</p>
                </div>
                <Dialog open={isPasswordDialogOpen} onOpenChange={(open) => {
                  setIsPasswordDialogOpen(open)
                  if (!open) {
                    setCurrentPassword('')
                    setNewPassword('')
                    setConfirmPassword('')
                    setPasswordError('')
                    setPasswordSuccess(false)
                  }
                }}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                      <Lock className="h-3 w-3 mr-1" />
                      Changer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Changer le mot de passe</DialogTitle>
                      <DialogDescription>
                        Entrez votre mot de passe actuel puis le nouveau.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      {/* Current Password */}
                      <div className="space-y-2">
                        <Label htmlFor="current-password" className="text-sm font-medium">Mot de passe actuel</Label>
                        <div className="relative">
                          <Input
                            id="current-password"
                            type={showCurrentPassword ? 'text' : 'password'}
                            value={currentPassword}
                            onChange={(e) => { setCurrentPassword(e.target.value); setPasswordError('') }}
                            placeholder="••••••••"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      {/* New Password */}
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="text-sm font-medium">Nouveau mot de passe</Label>
                        <div className="relative">
                          <Input
                            id="new-password"
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => { setNewPassword(e.target.value); setPasswordError('') }}
                            placeholder="Minimum 6 caractères"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      {/* Confirm Password */}
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-sm font-medium">Confirmer le mot de passe</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => { setConfirmPassword(e.target.value); setPasswordError('') }}
                          placeholder="Retapez le nouveau mot de passe"
                        />
                      </div>
                      {/* Error / Success Messages */}
                      {passwordError && (
                        <p className="text-sm text-destructive font-medium">{passwordError}</p>
                      )}
                      {passwordSuccess && (
                        <p className="text-sm text-yoel-green font-medium flex items-center gap-1">
                          <Check className="h-4 w-4" />
                          Mot de passe changé avec succès !
                        </p>
                      )}
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsPasswordDialogOpen(false)}>
                        Annuler
                      </Button>
                      <Button
                        onClick={handlePasswordChange}
                        disabled={isChangingPassword || !currentPassword || !newPassword || !confirmPassword}
                        className="bg-yoel-primary hover:bg-yoel-primary/90 text-white"
                      >
                        {isChangingPassword ? (
                          <Loader2 className="h-4 w-4 animate-spin mr-1" />
                        ) : (
                          <Lock className="h-4 w-4 mr-1" />
                        )}
                        Changer le mot de passe
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Apprentissage ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
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
                  <p className="text-xs text-muted-foreground">{dailyGoal === 0 ? 'Adapté automatiquement à votre niveau' : 'XP à gagner par jour'}</p>
                </div>
                <Select value={localGoal} onValueChange={handleGoalChange}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">🤖 Auto</SelectItem>
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
          <Card className="glass-card">
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
          <Card className="glass-card">
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
          <Card className="glass-card">
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
                    {isPremium ? (user?.premiumPlan === 'integral' ? 'Intégral (À vie)' : user?.premiumPlan === 'complet' ? 'Complet (Trimestriel)' : 'Essentiel (Mensuel)') : 'Gratuit'}
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
          <Card className="glass-card">
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
