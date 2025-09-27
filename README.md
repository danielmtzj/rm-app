# Directorio Rick & Morty

Aplicación con Angular y Firebase que permite explorar personajes de la serie Rick and Morty, filtrarlos por nombre, ver detalles y agregarlos a favoritos.

[Link a la app desplegada en Firebase](https://rick-morty-f6f93.web.app/characters) 

## Pasos para la instalacion/ejecucion/despliegue

### Clonar el repositorio

```bash
git clone https://github.com/danielmtzj/rm-app.git
```
```bash
cd rm-app
```

### Instalar las dependencias

```bash
ng install
```

### Ejecutar el proyecto

```bash
ng serve
```

### Desplegar en Firebase (Se requiere configurar previamente)

```bash
ng build --configuration production
```
```bash
firebase deploy
```

## Arquitectura y estructura

- Framework: Angular 20 con componentes standalone
- Persistencia: Firebase Firestore
- Routing: `provideRouter()` con rutas declarativas
- Carpetas del proyecto (resumidas):
```bash
src/
├── app/
│   ├── characters/         # Vistas y servicios de personajes
│   ├── favorites/          # Vistas y servicios de favoritos
│   ├── shared/             # Componentes reutilizables y configuración
│   └── app.ts              # Bootstrap principal
├── environments/           # Configuración por entorno
├── main.ts                 # Entrada principal
└── styles.css              # Estilos globales            
```

## Modelo de datos

- Coleccion: `favorites`
- Documento: `{userId}` con array de los personajes
- Indices: No requeridos para lectura directa por UID
- Reglas resumidas: Acceso restringido por `auth.uid`

## Modelo de datos

- Estado local con `signal` y `computed`
- Navegacion declarativa con `provideRouter()`
- Lazy loading por componente en rutas como `/favorites` y `/characters`

## Decisiones tecnicas 

- Uso de componentes standalone para escalabilidad y claridad
- Separación entre vistas `(project)` y reutilizables `(shared)`
- Implementación de `NoResultsComponent` para manejo de estados vacíos
- Uso de señales en lugar de `RxJS` para simplicidad y rendimiento
- Persistencia en Firestore con validación por UID

## Escalabilidad y mantenimiento

- Arquitectura modular permite agregar nuevas vistas fácilmente
- Separación clara entre lógica, presentación y persistencia
- Migrable a NgRx o Apollo si se requiere mayor complejidad
- Componentes reutilizables facilitan mantenimiento visual

## Seguridad y validaciones

Archivo: `firestore.rules`
```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /favorites/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
- No se exponen secretos ni claves en el Frontend
- Inputs validados en búsqueda y navegación
- No se permite escritura sin autenticación

## Rendimiento

- Filtrado local con `computed` para evitar llamadas innecesarias
- Carga inicial agrupada desde Firestore
- Lazy loading reduce el tamaño del bundle inicial
- Componentes livianos y sin dependencias pesadas

## Accesibilidad

- Contraste adecuado en alertas y botones
- Labels descriptivos en inputs
- Navegación por teclado funcional
- Mensajes claros en estados vacíos `(NoResultsComponent)`

## Uso de IA

#### a. ¿En qué partes te apoyaste y por qué?

Me apoyé en IA para idear la arquitectura, generar scaffolding de componentes y estructurar toda la documentación técnica del repositorio.

#### b. ¿Qué sugerencias aceptaste vs. reescribiste?

Acepté sugerencias sobre nomenclatura de componentes, estructura de rutas, y redacción profesional del README. Reescribí partes del código y documentación para adaptarlas a los estándares del reto.

#### c. Riesgos detectados (p. ej., performance, seguridad, sesgos) y cómo los mitigaste.

Detecté riesgos como exposición de datos sin autenticación y dependencia excesiva de prompts. Los mitigé con revisión manual, reglas de seguridad en Firestore y validación de cada sugerencia.

#### d. Breve resumen de prompts o enfoque (no pegues logs completos).
 
Usé prompts enfocados en diseño de css, accesibilidad mínima, layout responsivo, estructura modular en Angular, reglas de seguridad y documentación clara.

#### e. Lecciones y siguientes mejoras.

La IA fue estrategico y supervisado para estructurar el README completo, redactar el checklist de auditoría, explicar decisiones técnicas y asegurar que la documentación fuera clara y alineada con los criterios de evaluación. Validé cada sugerencia y prioricé seguridad, claridad y mantenibilidad.

Como siguiente paso, planeo usar IA para generar pruebas unitarias y automatizar documentación de componentes. Sin usar IA planeo agregar mas componentes, agregar un login para identificar usuarios de esta manera se mejorara la seguridad al agregar mas restricciones en las reglas de la bases de datos y mas funcionalidades a la aplicacion.  
