# React Native Navigation com Expo

Projeto React Native com Expo implementando navegação condicional e autenticação com Redux.

## Stack
- **Expo**: 56.0.12
- **React Native**: 0.85.3
- **React**: 19.2.3
- **TypeScript**: 6.0.3
- **Redux Toolkit**: Gerenciamento de estado global
- **React Navigation**: Navegação entre telas

## Scripts
```bash
npm start          # Inicia o servidor Expo
npm run android    # Inicia no Android
npm run ios        # Inicia no iOS
npm run web        # Inicia no web
npm run api        # Inicia json-server (API mock em http://localhost:3000)
```

## Documentação
- [Autenticação](docs/authentication.md) - Fluxos e cenários de autenticação com Redux

## Estrutura do Projeto
```
src/
├── api/          # API calls e serviços
├── components/   # Componentes reutilizáveis (folder-per-component)
├── config/       # tokens.ts, routes.ts, apiConfig.ts
├── helpers/      # Utility functions
├── screens/      # Telas (folder-per-component)
├── shared/       # Shared components e constants
├── store/        # Configuração Redux
├── slices/       # Redux slices
├── thunks/       # Operações assíncronas Redux
├── hooks/        # Hooks customizados
└── types/        # TypeScript type definitions
```

## Desenvolvimento
1. Inicie a API mock: `npm run api`
2. Inicie o app: `npm start`
3. Escaneie o QR code com o Expo Go
