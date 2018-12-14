# .bash_profile

# Get the aliases and functions
[ -f $HOME/.bashrc ] && . $HOME/.bashrc

# export
export EDITOR="nvim"
export BROWSER="qutebrowser"
export QEMU_AUDIO_DRV=alsa

# autologin on tty1
if [ -z "$DISPLAY" ] && [ "$(fgconsole)" -eq 1 ]; then
exec startx
fi
