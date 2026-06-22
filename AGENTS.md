# Project Configuration

## Stack
- **Expo**: 56.0.12
- **React Native**: 0.85.3
- **React**: 19.2.3
- **TypeScript**: 6.0.3

## Key Dependencies
- @react-navigation/native: 7.3.3
- @react-navigation/native-stack: 7.17.5
- react-native-safe-area-context: 5.7.0
- react-native-screens: 4.25.2

## Project Structure
```
src/
├── api/          # API calls and services
├── components/   # Componentes reutilizáveis (folder-per-component)
├── config/       # tokens.ts, routes.ts, apiConfig.ts, AuthContext.tsx
├── helpers/      # Utility functions
├── screens/      # Telas (folder-per-component)
├── shared/       # Shared components and constants
└── types/        # TypeScript type definitions
```

## Organização de Componentes e Telas (Folder-per-component)

Toda tela (`src/screens/`) e todo componente (`src/components/`) deve ser uma pasta. Nunca criar como arquivo único solto.

```
src/screens/HomeScreen/      src/components/Button/
├── index.tsx                ├── index.tsx
└── styles.ts                └── styles.ts
```

## Nomenclatura de Estilos (BEM)

Classes no `StyleSheet` seguem BEM com `kebab-case` entre aspas:
- Bloco: `button`
- Elemento: `"button__text"`
- Modificador: `"button--secondary"`, `"button--danger"`

```ts
// styles.ts
button: { ... },
"button--secondary": { backgroundColor: colors.secondary },
"button__text": { color: colors.white },

// index.tsx — acesso via colchetes para nomes com hífen
style={[styles.button, styles["button--secondary"]]}
```

## Design Tokens

Arquivo central de tokens: `src/config/tokens.ts`  
(`/home/vinicius/Downloads/estudo/aprendendo/mobile/react-native-navegacao-expo/src/config/tokens.ts`)

- **NUNCA** hardcode cores, espaçamentos, fontes ou raios — use sempre este arquivo
- **SEMPRE** adicione novos valores aqui antes de usá-los em qualquer componente ou tela

```ts
import { colors, spacing, typography, radius } from "../../config/tokens";
```

## Rotas do BFF

Toda URL de API deve vir de `src/config/routes.ts`. Nunca escrever template string de URL dentro de `src/api/`.

```ts
import { routes } from "../config/routes";
routes.users.byEmail(email)
routes.users.byId(id)
```

## Estrutura Criada

```
db.json                          ← banco mock com 2 usuários iniciais
src/
├── api/authApi.ts               ← CRUD real via fetch (GET/POST/PATCH/DELETE)
├── config/
│   ├── apiConfig.ts             ← URL base da API (configurável)
│   └── AuthContext.tsx          ← contexto global de autenticação
└── screens/auth/
    ├── LoginScreen.tsx
    ├── RegisterScreen.tsx
    └── ForgotPasswordScreen.tsx
```

## API Mock Local (json-server)

**O usuário controla manualmente a inicialização da API e do app.**

- API: `npm run api` (inicia em http://localhost:3000)
- App: `npm start`

Se precisar de restart após mudanças, avise o usuário para fechar e reiniciar manualmente.

## Testing
- **Tool**: Maestro for screen testing
- **Platform**: Run via Expo on mobile device
- **Focus**: Screen navigation and UI testing

## Workflows com Subagentes
@.claude/PARALLEL_WORKFLOWS.md

## Important Notes
- Read Expo docs at https://docs.expo.dev/versions/v56.0.0/ before writing code
- App runs on Expo Go for development and testing

## Verificação de Qualidade de Código
Antes de considerar qualquer tarefa concluída, execute:
```bash
npx tsc --noEmit && npx eslint src/ --ext .ts,.tsx
```
- `tsc --noEmit` — checagem de tipos TypeScript
- `eslint` — regras de código e estilo
- Ambos devem passar sem erros antes de marcar a task como `completed`

## Diretrizes de Eficiência
- Minimize o consumo de tokens e maximize a eficiência das tarefas
- Use comandos Linux (`grep`, `rg`, `find`, `awk`, `sed`) em vez de ler arquivos inteiros
- Leia apenas o necessário — nunca arquivos completos quando parte resolve

## Diretrizes de TypeScript
- **NUNCA** use `any` ou `unknown` — sempre defina tipos explícitos
- Crie interfaces e types em `src/types/` para qualquer estrutura de dados nova
- Erros de tipo devem ser resolvidos com tipagem correta, não com cast ou supressão

## Tratamento de Erros
- **NUNCA** use `try/catch` silencioso (catch vazio ou apenas `console.log`)
- **SEMPRE** retorne ou lance erros explicitamente para que o chamador possa tratar
- Use `try/catch` apenas para erros de I/O, rede ou lógica de negócio explícita — nunca para suprimir falhas de tipagem ou fluxo esperado

## Fluxo de Controle — Programação Defensiva
- **NUNCA** use `if/else` — prefira **early return** (guard clauses) e **ternário** para derivar valores

```ts
// ❌
function save(data: Data) {
  if (data) { persist(data); } else { throw new Error("sem dados"); }
}

// ✅
function save(data: Data) {
  if (!data) throw new Error("sem dados");
  persist(data);
}
```

## Segredos e Variáveis de Ambiente
- **NUNCA** coloque chaves de API, tokens, URLs de ambiente ou qualquer segredo diretamente no código
- **SEMPRE** use variáveis de ambiente via `.env` e acesse com `process.env.NOME_VAR`
- Adicione toda variável nova ao `.env.example` com valor placeholder

## Padrão de Commits
- Commits granulares conforme contexto das modificações
- Mensagem em linguagem de negócio: o que foi feito e por que
- Uma única frase por commit

**Exemplos:**
- `Adiciona validação de email no formulário de registro para evitar cadastros inválidos`
- `Corrige rota de login para redirecionar corretamente após autenticação bem-sucedida`

## Skills (Padrões Específicos do Projeto)
@.claude/skills/folder-per-component.md
@.claude/skills/bem-tokens.md
@.claude/skills/tipagem-estrita.md
@.claude/skills/programacao-defensiva.md
@.claude/skills/rotas-bff.md
@.claude/skills/roi-design.md
