# Unity HTTP Error (Insecure connection not allowed)

Job failed with exception: System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. ---> System.InvalidOperationException: Insecure connection not allowed

유니티에서 뭐만 하면 이런 로그가 뜨는 경우가 있다. 에디터를 켜든 프리팹에서 뭔갈 수정하면 계속 로그가 뜬다. 잘 살펴보면 External Dependency Manager때문에 일어나는 일이다. External Dependency Manager > iOS Resolver > Settings에서 Enable Analytics Reporting을 끄면 해결되는 간단한 문제였다. Opt-out analytics세팅이라니...

