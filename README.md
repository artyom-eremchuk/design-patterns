# Проект с паттернами проектирования

Этот проект демонстрирует реализацию различных паттернов проектирования, с акцентом на паттерн Singleton в качестве примера. Проект структурирован для демонстрации того, как паттерны проектирования могут быть использованы для решения распространенных проблем в дизайне программного обеспечения.

## Инструкции по настройке и развертыванию проекта

1. **Клонирование репозитория**:

   ```bash
   git clone https://github.com/artyom-eremchuk/design-patterns.git
   cd design-patterns
   ```

2. **Установка зависимостей**:

   ```bash
   npm install
   ```

3. **Запуск примеров**:
   ```bash
   npm run singleton
   npm run adapter
   npm run builder
   npm run proxy
   npm run fluent-interface
   npm run bridge
   npm run strategy
   npm run decorator
   npm run memento
   npm run observer
   npm run factory-method
   npm run state
   ```

## Категории Паттернов Проектирования

Паттерны проектирования делятся на три основные категории:

1. **Порождающие Паттерны (Creational Patterns)**:

   - Abstract Factory
   - [Builder](src/creational/builder/builder.md)
   - Factory Method
   - Prototype
   - [Singleton](src/creational/singleton/singleton.md)
   - [Factory Method](src/creational/factory-method/factory-method.md)

2. **Структурные Паттерны (Structural Patterns)**:

   - [Adapter](src/structural/adapter/adapter.md)
   - [Bridge](src/structural/bridge/bridge.md)
   - Composite
   - [Decorator](src/structural/decorator/decorator.md)
   - Facade
   - Flyweight
   - [Proxy](src/structural/proxy/proxy.md)

3. **Поведенческие Паттерны (Behavioral Patterns)**:

   - Chain of Responsibility
   - Command
   - Interpreter
   - Iterator
   - Mediator
   - [Memento](src/behavioral/memento/memento.md)
   - [Observer](src/behavioral/observer/observer.md)
   - [State](src/behavioral/state/state.md)
   - [Strategy](src/behavioral/strategy/strategy.md)
   - Template Method
   - Visitor
   - [Fluent Interface](src/behavioral/fluent-interface/fluent-interface.md)
