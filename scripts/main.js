Events.on(ClientLoadEvent, event => {
    const contentTypes = [
        Vars.content.blocks(),
        Vars.content.units(),
        Vars.content.items(),
        Vars.content.statusEffects()
    ];

    contentTypes.forEach(typeArray => {
        typeArray.each(content => {
            if (content.isVanilla()) {
                let spriteName;
                let fullSprite;
                
                if (content instanceof Item) {
                    spriteName = "item-" + content.name;
                } else if (content instanceof StatusEffect) {
                    spriteName = "status-" + content.name;
                } else {
                    spriteName = content.name + "-full";
                }
                
                fullSprite = Core.atlas.find(spriteName);
                
                if (!fullSprite.found()) {
                    if (content instanceof Item) {
                        fullSprite = Core.atlas.find(content.name);
                    } else if (content instanceof StatusEffect) {
                        fullSprite = Core.atlas.find("status-" + content.name + "-ui");
                    }
                }
                
                if (fullSprite.found()) {
                    content.uiIcon = fullSprite;
                    content.fullIcon = fullSprite;
                }
            }
        });
    });
});

const targetWeapons = [
    "large-weapon", 
    "flamethrower", 
    "artillery", 
    "scepter-weapon",
    "heal-weapon",
    "heal-shotgun-weapon",
    "beam-weapon",
    "beta-weapon",
    "small-basic-weapon",
    "small-mount-weapon"
];

Vars.content.units().each(unit => {
    if (unit.weapons) {
        unit.weapons.each(weapon => {
            if (targetWeapons.includes(weapon.name)) {
                weapon.top = false;
                weapon.layerOffset = -0.01;
            }
        });
    }
});

UnitTypes.dagger.weapons.get(0).x = 4;
UnitTypes.dagger.weapons.get(0).y = -0.5;

UnitTypes.fortress.weapons.get(0).x = 8.5;
UnitTypes.fortress.weapons.get(0).y = -1.5;

UnitTypes.pulsar.weapons.get(0).x = 6.5;
UnitTypes.pulsar.weapons.get(0).y = 0;

UnitTypes.quasar.weapons.get(0).x = -7.75;
UnitTypes.quasar.weapons.get(0).y = -2;

UnitTypes.beta.weapons.get(0).x = 4.25;
UnitTypes.beta.weapons.get(0).y = 3;

UnitTypes.alpha.weapons.get(0).x = 2.25;
UnitTypes.alpha.weapons.get(0).y = 3.25;

UnitTypes.scepter.weapons.get(0).x = 13.75;
UnitTypes.scepter.weapons.get(0).y = -0.5;
