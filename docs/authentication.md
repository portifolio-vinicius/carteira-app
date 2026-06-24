# Autenticação com Redux

## Visão Geral
Sistema de autenticação gerenciado por Redux Toolkit com persistência via AsyncStorage.

## Cenários Mapeados

### 1. Inicialização do App
**Fluxo:**
```
App inicia → Redux store criado → PersistGate carrega AsyncStorage
    ↓
Estado reidratado (user salvo ou null)
    ↓
RootNavigator verifica isAuthenticated e isLoading
    ↓
Se isLoading = true → LoadingScreen
Se isAuthenticated = true → MainNavigator
Se isAuthenticated = false → AuthNavigator
```

**Dependências:**
- Depende de: Redux store configurado, redux-persist configurado
- Habilita: Navegação condicional

### 2. Login
**Fluxo:**
```
Usuário preenche email/senha → Validação local
    ↓
dispatch(loginThunk(credentials))
    ↓
setLoading(true) → API call (authApi.login)
    ↓
Sucesso: setUser(user) → setLoading(false) → AsyncStorage persiste
Erro: setError(message) → setLoading(false)
    ↓
Navegação automática para MainNavigator (via isAuthenticated)
```

**Dependências:**
- Depende de: authSlice (setUser, setLoading, setError), authApi.login
- Habilita: Sessão autenticada, acesso a rotas protegidas

### 3. Registro
**Fluxo:**
```
Usuário preenche nome/email/senha → Validação local
    ↓
dispatch(registerThunk(data))
    ↓
setLoading(true) → API call (authApi.register)
    ↓
Sucesso: setUser(user) → setLoading(false) → AsyncStorage persiste
Erro: setError(message) → setLoading(false)
    ↓
Navegação automática para MainNavigator (via isAuthenticated)
```

**Dependências:**
- Depende de: authSlice (setUser, setLoading, setError), authApi.register
- Habilita: Sessão autenticada, acesso a rotas protegidas

### 4. Logout
**Fluxo:**
```
Usuário clica em "Sair" → dispatch(logoutThunk())
    ↓
clearAuth() → user = null, isAuthenticated = false
    ↓
AsyncStorage limpa dados persistidos
    ↓
Navegação automática para AuthNavigator (via isAuthenticated)
```

**Dependências:**
- Depende de: authSlice (clearAuth), redux-persist
- Habilita: Retorno a rotas públicas

### 5. Navegação Condicional
**Fluxo:**
```
RootNavigator monitora selectAuthState
    ↓
{ isAuthenticated, isLoading }
    ↓
isLoading = true → LoadingScreen
isAuthenticated = true → MainNavigator (Home, Details, Profile)
isAuthenticated = false → AuthNavigator (Login, Register, ForgotPassword)
```

**Dependências:**
- Depende de: authSlice (selectAuthState), React Navigation
- Habilita: Experiência de usuário baseada em estado de autenticação

### 6. Persistência de Sessão
**Fluxo:**
```
Qualquer mudança no authSlice → redux-persist detecta
    ↓
Salva automaticamente no AsyncStorage
    ↓
Próximo inicialização → PersistGate reidrata estado
    ↓
Usuário continua logado sem precisar autenticar novamente
```

**Dependências:**
- Depende de: redux-persist, AsyncStorage, authSlice whitelist
- Habilita: Sessão persistente entre fechamentos do app

## Estrutura de Dependências

```
┌─────────────────────────────────────────────────────────┐
│           INICIALIZAÇÃO DO APP                         │
│  (Redux store + PersistGate + LoadingScreen)           │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────┐
│           NAVEGAÇÃO CONDICIONAL                         │
│  (RootNavigator monitora isAuthenticated/isLoading)    │
└──────────────────────┬──────────────────────────────────┘
                       │
           ┌───────────┴───────────┐
           ↓                       ↓
┌──────────────────┐      ┌──────────────────┐
│  ROTAS PÚBLICAS  │      │ ROTAS PRIVADAS   │
│  (AuthNavigator) │      │ (MainNavigator)  │
└────────┬─────────┘      └────────┬─────────┘
         │                          │
    ┌────┴────┐              ┌──────┴──────┐
    ↓         ↓              ↓             ↓
┌──────┐ ┌──────┐      ┌──────┐    ┌──────────┐
│Login │ │Register│     │Home  │    │Profile   │
└──┬───┘ └──┬───┘      └──┬───┘    └────┬─────┘
   │         │              │             │
   ↓         ↓              ↓             ↓
┌──────────────────────────────────────────────────┐
│            AUTENTICAÇÃO (Thunks)                  │
│  loginThunk / registerThunk / logoutThunk        │
└──────────────────────┬───────────────────────────┘
                       │
                       ↓
┌──────────────────────────────────────────────────┐
│              AUTH SLICE (Estado)                  │
│  setUser / clearAuth / setLoading / setError      │
└──────────────────────┬───────────────────────────┘
                       │
                       ↓
┌──────────────────────────────────────────────────┐
│          PERSISTÊNCIA (redux-persist)             │
│  AsyncStorage salva automaticamente               │
└──────────────────────────────────────────────────┘
```

## Fluxos de Usuário

### Primeiro Acesso
1. App inicia → LoadingScreen
2. Navega para Login (sem sessão salva)
3. Usuário faz login → API → Redux → AsyncStorage
4. Navega para Home (autenticado)
5. Fecha app → Estado salvo

### Retorno ao App
1. App inicia → LoadingScreen
2. PersistGate reidrata estado do AsyncStorage
3. Navega direto para Home (já autenticado)

### Logout
1. Usuário clica "Sair" → clearAuth
2. Redux limpa estado → AsyncStorage limpa dados
3. Navega para Login (não autenticado)

## Componentes Envolvidos

| Cenário | Componentes Redux | Telas | API |
|---------|------------------|-------|-----|
| Inicialização | store, persistGate | LoadingScreen | - |
| Login | authSlice, loginThunk | LoginScreen | authApi.login |
| Registro | authSlice, registerThunk | RegisterScreen | authApi.register |
| Logout | authSlice, logoutThunk | HomeScreen, ProfileScreen | - |
| Navegação | selectAuthState | RootNavigator | - |
| Persistência | redux-persist, AsyncStorage | - | - |

## Arquivos Relacionados
- `src/store/index.ts` - Configuração do store Redux
- `src/slices/authSlice.ts` - Estado de autenticação
- `src/thunks/authThunks.ts` - Operações assíncronas
- `src/hooks/useAppDispatch.ts` - Hooks tipados
- `App.tsx` - Integração com Provider e PersistGate
