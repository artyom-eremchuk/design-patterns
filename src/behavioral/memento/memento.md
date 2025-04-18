# Паттерн Memento

## Описание

Паттерн Memento (Снимок) — это поведенческий паттерн проектирования, который позволяет сохранять и восстанавливать внутреннее состояние объекта без нарушения инкапсуляции. Этот паттерн используется для создания "точек сохранения" (снимков), которые можно использовать для возврата объекта в предыдущее состояние.

## В каких случаях используется?

- Когда необходимо сохранить состояние объекта перед изменением, чтобы позже можно было вернуться к этому состоянию.
- Когда требуется поддерживать историю изменений состояния объекта.
- Когда нужно избежать прямого доступа к внутреннему состоянию объекта.

## Плюсы

- **Сохраняет инкапсуляцию**, не нарушая принципы ООП.
- **Позволяет отменять изменения**, возвращая объект в предыдущее состояние.
- **Упрощает реализацию механизмов отмены и повтора действий**.

## Минусы

- **Может усложнить код**, добавляя дополнительные классы и методы.
- **Требует управления снимками**, что может увеличить объем памяти.

Пример реализации: [Memento](memento.ts)
