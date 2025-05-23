# Паттерн Observer

## Описание

Паттерн Observer (Наблюдатель) — это поведенческий паттерн проектирования, который позволяет объектам (наблюдателям) подписываться на изменения состояния другого объекта (субъекта) и получать уведомления об этих изменениях. Этот паттерн используется для реализации механизмов подписки и уведомления, когда один объект должен реагировать на изменения в другом объекте.

## В каких случаях используется?

- Когда один объект должен автоматически обновляться при изменении состояния другого объекта.
- Когда нужно поддерживать слабую связь между объектами, чтобы избежать жесткой зависимости.
- Когда требуется динамически добавлять или удалять объекты-наблюдатели.

## Плюсы

- **Слабая связь между объектами**, что упрощает их взаимодействие.
- **Гибкость в добавлении и удалении наблюдателей** без изменения кода субъекта.
- **Упрощение реализации механизмов уведомления** и синхронизации состояния между объектами.

## Минусы

- **Может привести к сложности в отладке**, если количество наблюдателей велико.
- **Возможны проблемы с производительностью**, если уведомления отправляются слишком часто или если количество наблюдателей велико.

## Пример реализации

Пример реализации паттерна Observer в контексте супергеройской тематики: [Observer](observer.ts).
