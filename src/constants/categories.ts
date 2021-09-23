const categories = [
    {
        name: "nature",
        preview:
            "https://images.unsplash.com/photo-1431057259500-78dd318a0a75?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=71d0e23d9a3ad967482926062b1c77c9",
        title: "природа",
    },
    {
        name: "space",
        preview:
            "https://images.unsplash.com/photo-1457327289196-f38b88d97147?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=5f4735bcb8caf4dfc84cf1e1298128e0",
        title: "космос",
    },
    {
        name: "cars",
        preview:
            "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=2551363db9503f163ad5b31f60597452",
        title: "машины",
    },
    {
        name: "animals",
        preview:
            "https://images.unsplash.com/photo-1459682687441-7761439a709d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=c29640fdfdd019b043fd4cac6989b933",
        title: "животные",
    },
    {
        name: "beach",
        preview:
            "https://images.unsplash.com/photo-1468879823303-35edd50416dc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=548d32157c7a16e369a455ab7e8d1859",
        title: "пляж",
    },
    {
        name: "music",
        preview:
            "https://images.unsplash.com/photo-1459233313842-cd392ee2c388?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=fb0f0ac783908dfc931d251163b80f5a",
        title: "музыка",
    },
    {
        name: "flowers",
        preview:
            "https://images.unsplash.com/photo-1474112704314-8162b7749a90?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=ba646f391d13ed3fc8fb48be6f2a41fd",
        title: "цветы",
    },
    {
        name: "sports",
        preview:
            "https://images.unsplash.com/photo-1457449205106-d0aad138e99b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=9694b7e65883e2c95d451f7eb6cf1c33",
        title: "спорт",
    },
    {
        name: "city",
        preview:
            "https://images.unsplash.com/photo-1452561802015-953ab78c4526?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=84ca27e413b5c1b2a8455d3a70b8dfbd",
        title: "город",
    },
    {
        name: "architecture",
        preview:
            "https://images.unsplash.com/photo-1463130456064-77fda7f96d6b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=8c2142cb21bf89c164e230d1af607e70",
        title: "архитектура",
    },
    {
        name: "patterns",
        preview:
            "https://images.unsplash.com/photo-1476813001184-9044d31e0ad1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=15243ef1db886f3e82a8454b45f6b0d0",
        title: "паттерны",
    },
    {
        name: "dark",
        preview:
            "https://images.unsplash.com/photo-1490668219599-a79d4d90cf66?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=0da6b514867ac2b1c82fbea64e3acd37",
        title: "темные",
    },
    {
        name: "colorful",
        preview:
            "https://images.unsplash.com/photo-1465161191540-aac346fcbaff?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=f6c010067e1d3185ddf9ddcd6b97071c",
        title: "красочные",
    },
    {
        name: "red",
        preview:
            "https://images.unsplash.com/photo-1453959022778-cfda85dbe0f9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=def95b35c6253219cd7faa51322840a6",
        title: "красный",
    },
    {
        name: "blue",
        preview:
            "https://images.unsplash.com/photo-1464798429116-8e26f96b2e60?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=b024a38e1330b504ceb9fdbc5c05a126",
        title: "синий",
    },
    {
        name: "yellow",
        preview:
            "https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=c443717698c88a6e444179420592c0e7",
        title: "желтый",
    },
    {
        name: "green",
        preview:
            "https://images.unsplash.com/photo-1447927228194-acfa3d1b45c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=1935444ad8cf93fb4beaac3b656a17e7",
        title: "зеленый",
    },
    {
        name: "orange",
        preview:
            "https://images.unsplash.com/photo-1478109562701-8d261b58b09d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=82c3de07a5542627a6144c401a916e83",
        title: "оранжевый",
    },
    {
        name: "purple",
        preview:
            "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=8e641f6b657d6f0ba8f15d30c906647a",
        title: "пурпурный",
    },
    {
        name: "pink",
        preview:
            "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYwMDV9&s=f6fd421b7131205f25a9a1f36c0731bc",
        title: "розовый",
    },
];

export default categories;
