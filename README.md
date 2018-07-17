Kotlin JS Common Classes/Function
=================================

Create some common classes/function for KotlinJs.

To use in `build.gradle`:

```
repositories {
    maven {
        url 'https://dl.bintray.com/freewind/maven/'
    }
}

dependencies {
    compile 'freewind.github.com:kotlin-js-commons:0.1.0'
}
```

Also npm:

```
npm install --save kotlin-js-commons
```

Publish
-------

to maven local:

```
./gradlew install
```

to bintray:

```
./gradlew bintrayPublish
```

to npm:

```
cd generated
npm publish
```

Notice
------

When you modified the code, don't forget to change versions in:

- `README.md`
- `build.gradle`
- `generated/package.json`