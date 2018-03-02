execute pathogen#infect()

source ~/.vim/vimrc.bepo
source ~/.vim/autoload/plug.vim

filetype plugin indent on " filetype detection[ON] plugin[ON] indent[ON]
set t_Co=256              " enable 256-color mode.
syntax enable             " enable syntax highlighting (previously syntax on).
colorscheme wal 	  " set colorscheme
set number                " show line numbers
set relativenumber
set laststatus=2          " last window always has a statusline
filetype indent on        " activates indenting for files
set nohlsearch            " Don't continue to highlight searched phrases.
set incsearch             " But do highlight as you type your search.
set ignorecase            " Make searches case-insensitive.
set ruler                 " Always show info along bottom.
set autoindent            " auto-indent
set nowrap                " don't wrap text
set linebreak
set textwidth=79

