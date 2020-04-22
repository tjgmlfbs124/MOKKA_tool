export const COLOR_PICKER_MODE = {
    SLIDER: 'SLIDER',
    SWATCHES: 'SWATCHES',
};

export const EMIT_TYPES = {
    submit: 'submit',
    load: 'load',
    search: 'search',
    fetch: 'fetch',
    close: 'close',
    write: 'write',
    draw: 'draw',
    makeProject: 'makeproject',
    select: 'select',
    story_load: 'story_load',
    bluetooth: 'bluetooth'
};

const SPRITE_SIDEBAR = {
    entrybot_friends: {
        name: 'Category.entrybot_friends',
        sub: {
            all: { name: 'Menus.all' },
        },
    },
    people: {
        name: 'Category.people',
        sub: {
            all: { name: 'Menus.all' },
        },
    },
    animal: {
        name: 'Category.animal',
        sub: {
            all: { name: 'Menus.all' },
            animal_flying: { name: 'Category.animal_flying' },
            animal_land: { name: 'Category.animal_land' },
            animal_water: { name: 'Category.animal_water' },
        },
    },
    plant: {
        name: 'Category.plant',
        sub: {
            all: { name: 'Menus.all' },
            plant_flower: { name: 'Category.plant_flower' },
            plant_grass: { name: 'Category.plant_grass' },
            plant_tree: { name: 'Category.plant_tree' },
            plant_others: { name: 'Category.plant_others' },
        },
    },
    vehicles: {
        name: 'Category.vehicles',
        sub: {
            all: { name: 'Menus.all' },
            vehicles_flying: { name: 'Category.vehicles_flying' },
            vehicles_land: { name: 'Category.vehicles_land' },
            vehicles_water: { name: 'Category.vehicles_water' },
        },
    },
    architect: {
        name: 'Category.architect',
        sub: {
            all: { name: 'Menus.all' },
            architect_building: { name: 'Category.architect_building' },
            architect_monument: { name: 'Category.architect_monument' },
            architect_others: { name: 'Category.architect_others' },
        },
    },
    food: {
        name: 'Category.food',
        sub: {
            all: { name: 'Menus.all' },
            food_vegetables: { name: 'Category.food_vegetables' },
            food_meat: { name: 'Category.food_meat' },
            food_drink: { name: 'Category.food_drink' },
            food_others: { name: 'Category.food_others' },
        },
    },
    environment: {
        name: 'Category.environment',
        sub: {
            all: { name: 'Menus.all' },
            environment_nature: { name: 'Category.environment_nature' },
            environment_space: { name: 'Category.environment_space' },
            environment_others: { name: 'Category.environment_others' },
        },
    },
    stuff: {
        name: 'Category.stuff',
        sub: {
            all: { name: 'Menus.all' },
            stuff_living: { name: 'Category.stuff_living' },
            stuff_hobby: { name: 'Category.stuff_hobby' },
            stuff_others: { name: 'Category.stuff_others' },
        },
    },
    fantasy: {
        name: 'Category.fantasy',
        sub: {
            all: { name: 'Menus.all' },
        },
    },
    interface: {
        name: 'Category.interface',
        sub: {
            all: { name: 'Menus.all' },
        },
    },
    background: {
        name: 'Category.background',
        sub: {
            all: { name: 'Menus.all' },
            background_outdoor: { name: 'Category.background_outdoor' },
            background_indoor: { name: 'Category.background_indoor' },
            background_nature: { name: 'Category.background_nature' },
            background_others: { name: 'Category.background_others' },
        },
    },
    mokkaWorld: {
        name: 'Category.mokkaWorld',
        sub: {
            all: { name: 'Menus.all' },
            mokkaWorld_Chapter01: { name: 'Category.chapter01' },
            mokkaWorld_Chapter02: { name: 'Category.chapter02' },
            mokkaWorld_Chapter03: { name: 'Category.chapter03' },
            mokkaWorld_Chapter04: { name: 'Category.chapter04' },
            mokkaWorld_Chapter05: { name: 'Category.chapter05' },
            mokkaWorld_Chapter06: { name: 'Category.chapter06' },
            mokkaWorld_Chapter07: { name: 'Category.chapter07' },
            mokkaWorld_Chapter08: { name: 'Category.chapter08' },
            mokkaWorld_Chapter09: { name: 'Category.chapter09' },
            mokkaWorld_Chapter010: { name: 'Category.chapter10' },
        },
    },
    mokka2: {
        name: 'Category.mokka2',
        sub: {
            all: { name: 'Menus.all' },
            mokkaWorld_Chapter01: { name: 'Category.chapter01' },
            mokkaWorld_Chapter02: { name: 'Category.chapter02' },
            mokkaWorld_Chapter03: { name: 'Category.chapter03' },
            mokkaWorld_Chapter04: { name: 'Category.chapter04' },
            mokkaWorld_Chapter05: { name: 'Category.chapter05' },
            mokkaWorld_Chapter06: { name: 'Category.chapter06' },
            mokkaWorld_Chapter07: { name: 'Category.chapter07' },
            mokkaWorld_Chapter08: { name: 'Category.chapter08' },
            mokkaWorld_Chapter09: { name: 'Category.chapter09' },
            mokkaWorld_Chapter010: { name: 'Category.chapter10' },
        },
    }
};

const STORY_SIDEBAR = {
    STORY_01: {
        name: 'Category.STORY_01',
        sub: {
            STORY_01_first: {name: "Category.STORY_first"},
            STORY_01_second: {name: "Category.STORY_second"},
            STORY_01_third: {name: "Category.STORY_third"},
            STORY_01_answer: {name: "Category.STORY_answer"}

        },
    },
    STORY_02: {
        name: 'Category.STORY_02',
        sub: {
            STORY_02_first: {name: "Category.STORY_first"},
            STORY_02_second: {name: "Category.STORY_second"},
            STORY_02_third: {name: "Category.STORY_third"},
            STORY_02_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY_03: {
        name: 'Category.STORY_03',
        sub: {
            STORY_03_first: {name: "Category.STORY_first"},
            STORY_03_second: {name: "Category.STORY_second"},
            STORY_03_third: {name: "Category.STORY_third"},
            STORY_03_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY_04: {
        name: 'Category.STORY_04',
        sub: {
            STORY_04_first: {name: "Category.STORY_first"},
            STORY_04_second: {name: "Category.STORY_second"},
            STORY_04_third: {name: "Category.STORY_third"},
            STORY_04_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY_05: {
        name: 'Category.STORY_05',
        sub: {
            STORY_05_first: {name: "Category.STORY_first"},
            STORY_05_second: {name: "Category.STORY_second"},
            STORY_05_third: {name: "Category.STORY_third"},
            STORY_05_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY_06: {
        name: 'Category.STORY_06',
        sub: {
            STORY_06_first: {name: "Category.STORY_first"},
            STORY_06_second: {name: "Category.STORY_second"},
            STORY_06_third: {name: "Category.STORY_third"},
            STORY_06_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY_07: {
        name: 'Category.STORY_07',
        sub: {
            STORY_07_first: {name: "Category.STORY_first"},
            STORY_07_second: {name: "Category.STORY_second"},
            STORY_07_third: {name: "Category.STORY_third"},
            STORY_07_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY_08: {
        name: 'Category.STORY_08',
        sub: {
            STORY_08_first: {name: "Category.STORY_first"},
            STORY_08_second: {name: "Category.STORY_second"},
            STORY_08_third: {name: "Category.STORY_third"},
            STORY_08_answer: {name: "Category.STORY_answer"}
        },
    }

};

const STORY2_SIDEBAR = {
    STORY2_01: {
        name: 'Category.STORY2_01',
        sub: {
            STORY2_01_first: {name: "Category.STORY_first"},
            STORY2_01_second: {name: "Category.STORY_second"},
            STORY2_01_third: {name: "Category.STORY_third"},
            STORY2_01_answer: {name: "Category.STORY_answer"}

        },
    },
    STORY2_02: {
        name: 'Category.STORY2_02',
        sub: {
            STORY2_02_first: {name: "Category.STORY_first"},
            STORY2_02_second: {name: "Category.STORY_second"},
            STORY2_02_third: {name: "Category.STORY_third"},
            STORY2_02_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_03: {
        name: 'Category.STORY2_03',
        sub: {
            STORY2_03_first: {name: "Category.STORY_first"},
            STORY2_03_second: {name: "Category.STORY_second"},
            STORY2_03_third: {name: "Category.STORY_third"},
            STORY2_03_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_04: {
        name: 'Category.STORY2_04',
        sub: {
            STORY2_04_first: {name: "Category.STORY_first"},
            STORY2_04_second: {name: "Category.STORY_second"},
            STORY2_04_third: {name: "Category.STORY_third"},
            STORY2_04_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_05: {
        name: 'Category.STORY2_05',
        sub: {
            STORY2_05_first: {name: "Category.STORY_first"},
            STORY2_05_second: {name: "Category.STORY_second"},
            STORY2_05_third: {name: "Category.STORY_third"},
            STORY2_05_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_06: {
        name: 'Category.STORY2_06',
        sub: {
            STORY2_06_first: {name: "Category.STORY_first"},
            STORY2_06_second: {name: "Category.STORY_second"},
            STORY2_06_third: {name: "Category.STORY_third"},
            STORY2_06_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_07: {
        name: 'Category.STORY2_07',
        sub: {
            STORY2_07_first: {name: "Category.STORY_first"},
            STORY2_07_second: {name: "Category.STORY_second"},
            STORY2_07_third: {name: "Category.STORY_third"},
            STORY2_07_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_08: {
        name: 'Category.STORY2_08',
        sub: {
            STORY2_08_first: {name: "Category.STORY_first"},
            STORY2_08_second: {name: "Category.STORY_second"},
            STORY2_08_third: {name: "Category.STORY_third"},
            STORY2_08_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_09: {
        name: 'Category.STORY2_09',
        sub: {
            STORY2_09_first: {name: "Category.STORY_first"},
            STORY2_09_second: {name: "Category.STORY_second"},
            STORY2_09_third: {name: "Category.STORY_third"},
            STORY2_09_answer: {name: "Category.STORY_answer"}
        },
    },
    STORY2_10: {
        name: 'Category.STORY2_10',
        sub: {
            STORY2_10_first: {name: "Category.STORY_first"},
            STORY2_10_second: {name: "Category.STORY_second"},
            STORY2_10_third: {name: "Category.STORY_third"},
            STORY2_10_answer: {name: "Category.STORY_answer"}
        },
    }

};

const EDUCATION_SIDEBAR = {
    EDUCATION_01: {
        name: 'Category.EDUCATION_01',
        sub: {
            EDUCATION_01_MISSION: {name: "Category.MISSION"},
            EDUCATION_01_ANSWER: {name: "Category.ANSWER"},
        },
    },
    EDUCATION_02: {
        name: 'Category.EDUCATION_02',
        sub: {
            EDUCATION_02_MISSION: {name: "Category.MISSION"},
            EDUCATION_02_ANSWER: {name: "Category.ANSWER"},
        },
    },
    EDUCATION_03: {
        name: "Category.EDUCATION_03",
        sub: {
            EDUCATION_03_MISSION: {name: "Category.MISSION"},
            EDUCATION_03_ANSWER: {name: "Category.ANSWER"},
        },
    }
};

export const DEFAULT_OPTIONS = {
    WRITE_BOX: {
        FONTS: [
            {
                name: '바탕체',
                family: 'KoPub Batang',
                url: '/css/kopubbatang.css',
                $$hashKey: 'object:135',
            },
            {
                name: '명조체',
                family: 'Nanum Myeongjo',
                url: '/css/nanummyeongjo.css',
                $$hashKey: 'object:136',
            },
            {
                name: '고딕체',
                family: 'Nanum Gothic',
                url: '/css/nanumgothic.css',
                $$hashKey: 'object:137',
            },
            {
                name: '필기체',
                family: 'Nanum Pen Script',
                url: '/css/nanumpenscript.css',
                $$hashKey: 'object:138',
            },
            {
                name: '한라산체',
                family: 'Jeju Hallasan',
                url: '/css/jejuhallasan.css',
                $$hashKey: 'object:139',
            },
            {
                name: '코딩고딕체',
                family: 'Nanum Gothic Coding',
                url: '/css/nanumgothiccoding.css',
                $$hashKey: 'object:140',
            },
        ],
        EFFECTS: {
            bold: {
                text: 'Workspace.bold',
                apply: false,
                css: {
                    fontWeight: 'bold',
                },
            },
            underLine: {
                text: 'Workspace.font_underline',
                apply: false,
                css: {
                    textDecoration: 'underline',
                },
            },
            italic: {
                text: 'Workspace.font_tilt',
                apply: false,
                css: {
                    fontStyle: 'italic',
                },
            },
            through: {
                text: 'Workspace.font_cancel',
                apply: false,
                css: {
                    textDecoration: 'line-through',
                },
            },
            color: {
                text: 'Workspace.font_color',
                apply: false,
                css: {
                    color: '#000000',
                },
            },
            backgroundColor: {
                text: 'Workspace.font_fill',
                apply: false,
                css: {
                    backgroundColor: '#ffffff',
                },
            },
        },
    },
    POPUP_TYPE: {
        sprite: {
            title: 'Workspace.add_object',
            mainType: 'sprite',
            navigations: {
                select: {
                    name: 'Workspace.select_library',
                },
                upload: {
                    name: 'Workspace.upload',
                },
                draw: {
                    name: 'Workspace.draw_new',
                },
                write: {
                    name: 'Workspace.textbox',
                },
                bluetooth: {
                    name: 'Workspace.bluetooth',
                }
            },
            opt: {
                search: { query: true },
                multiSelect: true,
                uploadAllowed: {
                    image: true,
                    object: true,
                    sound: false,
                },
                uploadNotAllowedExt: ['gif'],
            },
            sidebar: SPRITE_SIDEBAR,
        },
        story: { // @ckw
            title: 'Workspace.tathink',
            mainType: 'story', //sprite
            navigations: {
                story_load: {
                    name: 'Workspace.story_load',
                },
                story2_load: {
                    name: 'Workspace.story2_load',
                },
                education: {
                    name: 'Workspace.education',
                }
            },
            opt: {
                search: { query: false },
                multiSelect: false,
                uploadAllowed: {
                    image: true,
                    object: true,
                    sound: false,
                },
                uploadNotAllowedExt: ['gif'],
            },
            sidebar: STORY_SIDEBAR,
            educationBar : EDUCATION_SIDEBAR,
            story2_sidebar: STORY2_SIDEBAR,
        },
        picture: {
            title: 'Workspace.picture_add',
            mainType: 'sprite',
            navigations: {
                select: {
                    name: 'Workspace.select_picture',
                },
                upload: {
                    name: 'Workspace.upload',
                },
                draw: {
                    name: 'Workspace.draw_new',
                },
            },
            opt: {
                search: { query: true },
                multiSelect: true,
                uploadAllowed: {
                    image: true,
                    object: false,
                    sound: false,
                },
                uploadNotAllowedExt: ['gif'],
            },
            sidebar: SPRITE_SIDEBAR,
        },
        paint: {
            title: 'Menus.picture_import',
            mainType: 'sprite',
            navigations: {
                select: {
                    name: 'Workspace.select_picture',
                },
                upload: {
                    name: 'Workspace.upload',
                },
            },
            opt: {
                multiSelect: false,
                uploadAllowed: {
                    image: true,
                    object: false,
                    sound: false,
                },
                uploadNotAllowedExt: ['gif', 'eo'],
            },
            sidebar: SPRITE_SIDEBAR,
        },
        sound: {
            title: 'Workspace.sound_add',
            mainType: 'sound',
            navigations: {
                select: {
                    name: 'Workspace.select_sound',
                },
                upload: {
                    name: 'Workspace.upload',
                },
            },
            opt: {
                search: { query: true },
                multiSelect: true,
                uploadAllowed: {
                    image: false,
                    object: false,
                    sound: true,
                },
            },
            sidebar: {
                사람: {
                    name: 'Menus.people',
                    sub: {
                        all: { name: 'Menus.all' },
                    },
                },
                자연: {
                    name: 'Menus.nature',
                    sub: {
                        all: { name: 'Menus.all' },
                        동물: { name: 'Menus.animal_insect' },
                        자연환경: { name: 'Menus.environment' },
                    },
                },
                사물: {
                    name: 'Menus.things',
                    sub: {
                        all: { name: 'Menus.all' },
                        이동수단: { name: 'Menus.vehicles' },
                        기타: { name: 'Menus.others' },
                    },
                },
                판타지: {
                    name: 'Menus.fantasy',
                    sub: {
                        all: { name: 'Menus.all' },
                    },
                },
                악기: {
                    name: 'Menus.instrument',
                    sub: {
                        all: { name: 'Menus.all' },
                        피아노: { name: 'Menus.piano' },
                        마림바: { name: 'Menus.marimba' },
                        드럼: { name: 'Menus.drum' },
                        장구: { name: 'Menus.janggu' },
                        효과음: { name: 'Menus.sound_effect' },
                        기타타악기: { name: 'Menus.others_instrument' },
                    },
                },
            },
        },
        expansion: {
            title: 'Workspace.load_expansion_block',
            mainType: 'expansion',
        },
        projects: {
            title: 'Menus.my_project',
            mainType: 'projects',
            navigations: {
                projects: {
                    name: 'Menus.my_project',
                },
                favorites: {
                    name: 'Menus.marked_project',
                },
            },
        },
    },
};
