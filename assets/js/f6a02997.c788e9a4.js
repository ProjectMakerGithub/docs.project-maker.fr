"use strict";(self.webpackChunkdocs_project_maker_fr=self.webpackChunkdocs_project_maker_fr||[]).push([[9439],{3999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(4848),o=t(8453);const r={},i="Code de base",d={id:"guidew/Bot discord/discord.py/Personaliser le bot",title:"Code de base",description:"Il semble que vous souhaitiez montrer aux d\xe9butants comment am\xe9liorer l'apparence de leur bot Discord en utilisant la biblioth\xe8que discord.py. La partie de code que vous avez partag\xe9e semble \xeatre li\xe9e \xe0 la gestion de l'\xe9v\xe9nement on_ready, o\xf9 le bot affiche des informations dans le terminal pour indiquer qu'il est pr\xeat. Voici comment vous pourriez expliquer ce code aux d\xe9butants et ajouter quelques suggestions pour am\xe9liorer davantage leur bot :",source:"@site/docs/guidew/Bot discord/discord.py/Personaliser le bot.md",sourceDirName:"guidew/Bot discord/discord.py",slug:"/guidew/Bot discord/discord.py/Personaliser le bot",permalink:"/docs/guidew/Bot discord/discord.py/Personaliser le bot",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},l=[];function c(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"code-de-base",children:"Code de base"}),"\n",(0,s.jsxs)(n.p,{children:["Il semble que vous souhaitiez montrer aux d\xe9butants comment am\xe9liorer l'apparence de leur bot Discord en utilisant la biblioth\xe8que discord.py. La partie de code que vous avez partag\xe9e semble \xeatre li\xe9e \xe0 la gestion de l'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"on_ready"}),", o\xf9 le bot affiche des informations dans le terminal pour indiquer qu'il est pr\xeat. Voici comment vous pourriez expliquer ce code aux d\xe9butants et ajouter quelques suggestions pour am\xe9liorer davantage leur bot :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Importez les modules n\xe9cessaires\n\nimport discord\nimport time\nimport platform\nfrom discord.ext import commands\n# Assurez-vous d'avoir install\xe9 le module colorama\nfrom colorama import Back, Fore, Style\n# Cr\xe9ez une instance de bot\n\nbot = commands.Bot(command_prefix='!', intents=discord.Intents.all())\n# D\xe9finissez un \xe9tat de bot (peut \xeatre 'online', 'idle', 'dnd', 'invisible')\n\nstatus_discord_bot = discord.Status.online\n# \xc9v\xe9nement on_ready : appel\xe9 lorsque le bot est pr\xeat\n\nprfx = (\n\xa0 \xa0 Back.BLACK + Fore.GREEN + time.strftime(\"%H:%M:%S UTC\", time.gmtime())\n\xa0 \xa0 + Back.RESET + Fore.WHITE + Style.BRIGHT\n)\n\n@bot.event\n\nasync def on_ready():\n\xa0 \xa0 print(prfx + \" Connection de \" + Fore.YELLOW + bot.user.name)\n\xa0 \xa0 print(prfx + \" Bot ID \" + Fore.YELLOW + str(bot.user.id))\n\xa0 \xa0 print(prfx + \" Status \" + Fore.YELLOW + str(status_discord_bot))\n\xa0 \xa0 print(prfx + \" Discord Version \" + Fore.YELLOW + discord.__version__)\n\xa0 \xa0 print(prfx + \" Python Version \" + Fore.YELLOW + str(platform.python_version()))\n\n# Commande personnalis\xe9e : pour changer le statut du bot\n\n@bot.command()\nasync def set_status(ctx, new_status):\n\xa0 \xa0 if new_status in ['online', 'idle', 'dnd', 'invisible']:\n\xa0 \xa0 \xa0 \xa0 print(prfx + \" Status \" + Fore.YELLOW + f\"{new_status}\")\n\xa0 \xa0 \xa0 \xa0 await bot.change_presence(status=discord.Status[new_status])\n\xa0 \xa0 \xa0 \xa0 await ctx.send(f\"Le statut du bot a \xe9t\xe9 mis \xe0 {new_status}\")\n\xa0 \xa0 else:\n\xa0 \xa0 \xa0 \xa0 await ctx.send(\"Statut invalide. Utilisez l'une des options suivantes : online, idle, dnd, invisible\")\n\n# Token de votre bot (\xe0 remplacer par votre propre token)\nTOKEN = 'YOUR_BOT_TOKEN_HERE'\n\n# Lancer le bot\nbot.run(TOKEN)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explications :"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Le code commence par les importations n\xe9cessaires, y compris ",(0,s.jsx)(n.code,{children:"discord"}),", ",(0,s.jsx)(n.code,{children:"time"}),", ",(0,s.jsx)(n.code,{children:"platform"}),", ",(0,s.jsx)(n.code,{children:"commands"})," de ",(0,s.jsx)(n.code,{children:"discord.ext"}),", et le module de couleurs ",(0,s.jsx)(n.code,{children:"colorama"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Une instance de bot est cr\xe9\xe9e en utilisant ",(0,s.jsx)(n.code,{children:"commands.Bot"})," et un pr\xe9fixe de commande (dans cet exemple, le pr\xe9fixe est ",(0,s.jsx)(n.code,{children:"'!'"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Un \xe9tat personnalis\xe9 du bot, ",(0,s.jsx)(n.code,{children:"status_discord_bot"}),", est d\xe9fini. Vous pouvez le changer pour contr\xf4ler l'\xe9tat initial du bot."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"on_ready"})," est d\xe9fini pour afficher des informations dans le terminal lorsque le bot est pr\xeat. Ces informations incluent le nom du bot, son ID, son statut, la version de Discord et la version de Python."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Une commande personnalis\xe9e ",(0,s.jsx)(n.code,{children:"set_status"})," est d\xe9finie pour permettre aux utilisateurs de changer dynamiquement le statut du bot. Les options valides sont ",(0,s.jsx)(n.code,{children:"'online'"}),", ",(0,s.jsx)(n.code,{children:"'idle'"}),", ",(0,s.jsx)(n.code,{children:"'dnd'"})," (ne pas d\xe9ranger) et ",(0,s.jsx)(n.code,{children:"'invisible'"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Remplacez ",(0,s.jsx)(n.code,{children:"'YOUR_BOT_TOKEN_HERE'"})," par le v\xe9ritable token de votre bot pour le faire fonctionner."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Assurez-vous que les utilisateurs installent les biblioth\xe8ques n\xe9cessaires en ex\xe9cutant ",(0,s.jsx)(n.code,{children:"pip install discord.py colorama"})," dans leur environnement Python."]}),"\n",(0,s.jsx)(n.p,{children:"En plus de cela, vous pourriez \xe9galement sugg\xe9rer d'autres am\xe9liorations telles que l'ajout de commandes personnalis\xe9es, la gestion des \xe9v\xe9nements de message, l'incorporation d'une base de donn\xe9es pour stocker des informations, et l'ajout d'une interface utilisateur graphique (GUI) pour une exp\xe9rience utilisateur plus riche."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);