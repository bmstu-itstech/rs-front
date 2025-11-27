# Как деплоить

## Создание образа докера
```bash
docker build . -t rs-front-rw
```

## Запуск образа докера
```bash
docker run -p 3000:3000 rs-front-rw
```