# Принципы SOLID

## S – Single Responsibility (Принцип единственной ответственности)

`Каждый класс должен отвечать только за одну операцию.`

Принцип служит для разделения типов поведения, благодаря которому ошибки,
вызванные модификациями в одном поведении, не распространялись на прочие, не связанные с ним типы.

## O — Open-Closed (Принцип открытости-закрытости)

`Классы должны  быть  открыты для расширения, но закрыты для модификации.`

Когда вы меняете текущее поведение класса, эти изменения сказываются на всех системах, работающих с данным классом. Если хотите, чтобы класс выполнял больше операций, то идеальный вариант – не заменять старые на новые, а добавлять новые к уже существующим.

## L — Liskov Substitution (Принцип подстановки Барбары Лисков)

`Если П является подтипом Т, то любые объекты типа Т, присутствующие в программе, могут заменяться объектами типа П без негативных последствий для функциональности программы.`

Необходимо, чтобы класс-потомок был способен обрабатывать те же запросы, что и родитель, и выдавать тот же результат. Или же результат может отличаться, но при этом относиться к тому же типу.

## I — Interface Segregation (Принцип разделения интерфейсов)

`Не следует ставить клиент в зависимость от методов, которые он не использует.`

Класс должен производить только те операции, которые необходимы для осуществления его функций. Все другие действия следует либо удалить совсем, либо переместить, если есть вероятность, что они понадобятся другому классу в будущем.

## D — Dependency Inversion (Принцип инверсии зависимостей)

`Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те, и другие должны зависеть от абстракций. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.`

Модули (или классы) верхнего уровня = классы, которые выполняют операцию при помощи инструмента
Модули (или классы) нижнего уровня = инструменты, которые нужны для выполнения операций
Абстракции – представляют интерфейс, соединяющий два класса
Детали = специфические характеристики работы инструмента
