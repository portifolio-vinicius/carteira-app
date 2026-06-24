# Project Context

> Minimize o consumo de tokens e maximize a eficiência das tarefas.

## Stack
- Expo 54 / React Native 0.81.5 / TypeScript
- Redux Toolkit + redux-persist
- React Navigation (native-stack)
- json-server (mock API em http://localhost:3000)

## Estrutura
```
src/
├── api/          ← fetch calls (usa routes.ts, nunca URL direta)
├── components/   ← folder-per-component: pasta + index.tsx + styles.ts
├── config/       ← tokens.ts, routes.ts, apiConfig.ts
├── screens/      ← folder-per-component, subpastas por domínio (auth/)
├── slices/       ← Redux slices
├── thunks/       ← Redux thunks
├── store/        ← configureStore
├── hooks/        ← useAppDispatch, etc.
└── types/        ← domain/ e shared/
```

## Comandos
- App: `npm start`
- API mock: `npm run api`

## Qualidade de código

Todo código deve seguir princípios de manutenibilidade e evitar redundâncias conforme a necessidade: SOLID, DRY, KISS, YAGNI, Clean Code. Aplicar com bom senso — sem over-engineering.

## Validação obrigatória antes de concluir qualquer tarefa
```bash
npx tsc --noEmit && npx eslint src/ --ext .ts,.tsx
```

## Prompt de subagente — regras para o orquestrador

Subagentes recebem este AGENTS.md automaticamente. O prompt do `Agent tool` deve conter **apenas**:
1. A tarefa específica
2. O formato de saída esperado

NUNCA repetir no prompt: stack, estrutura de pastas, caminho do projeto, convenções — já estão aqui.

```
# ✅ Correto — só tarefa + formato
"Liste todos os slices em src/slices/ e extraia os campos do initialState.
Formato: - [slice]: campos=[...], padrão=[createAsyncThunk|manual]"

# ❌ Errado — repete contexto que o subagente já tem
"Você é um subagente. Projeto: React Native + Expo em /home/...
Stack: Redux Toolkit... Estrutura: src/slices/...
Tarefa: liste os slices."
```

## Padrões sempre ativos
@.claude/skills/gestao-contexto.md

## Skills de workflow disponíveis (invocar via /nome)
- orquestrando-subagentes
- clarificando-requisitos
- planejando-tarefa
- criando-tela
- criando-feature
- corrigindo-bug
- refatorando
- criando-componente
- testando-browser — testa navegação/bug no browser, viewport celular, SEM exportar imagem
- exportando-design — exporta screenshots das telas para docs/design-preview/, APENAS quando solicitado
- commitando — analisa mudanças, decide granularidade e escreve commits em linguagem natural
