const index = {
    "name": "index",
    "label": "Списки",
    "file": "src/_data/index.json",
    "widget" : "list",
    "fields": [
        {
            "name": "wedo",
            "label": "Мы делаем",
            "widget" : "list",
            "fields": [
                {
                    "label": "Название",
                    "name": "name",
                    "widget": "string"
                },
                {
                    "name": "text",
                    "label": "Данные",
                    "widget": "list",
                    "fields": [
                        {
                            "label": "Анкор",
                            "name": "name",
                            "widget": "string"
                        },
                        {
                            "label": "Ссылка",
                            "name": "link",
                            "widget": "string"
                        },
                    ]
                }
            ]
        },
        {
            "name": "process",
            "label": "Как делаем",
            "widget" : "list",
            "fields": [
                {
                    "label": "Название",
                    "name": "title",
                    "widget": "string"
                },
                {
                    "name": "text",
                    "label": "Текст",
                    "widget": "markdown",
                }
            ]
        }
    ]
}

export { index }