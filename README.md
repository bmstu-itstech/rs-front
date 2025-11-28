# Как деплоить

## Создание образа докера
```bash
docker build --build-arg NEXT_PUBLIC_API_URL=http://192.168.66.66:8075/ -t app .
```

## Запуск образа докера
```bash
docker run -p 3000:3000 app
```
