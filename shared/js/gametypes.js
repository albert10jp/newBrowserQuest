var Types = {};

Types.Messages = {
    HELLO: 0,
    WELCOME: 1,
    SPAWN: 2,
    DESPAWN: 3,
    MOVE: 4,
    LOOTMOVE: 5,
    AGGROMOVE: 6,
    AGGRO: 6,
    ATTACK: 7,
    HIT: 8,
    HURT: 9,
    HEALTH: 10,
    CHAT: 11,
    LOOT: 12,
    EQUIP: 13,
    DROP: 14,
    TELEPORT: 15,
    DAMAGE: 16,
    POPULATION: 17,
    KILL: 18,
    LIST: 19,
    WHO: 20,
    ZONE: 21,
    DESTROY: 22,
    HP: 23,
    BLINK: 24,
    OPEN: 25,
    CHECK: 26
};

Types.Entities = {
    WARRIOR: 1,
    
    RAT: 2,
    SKELETON: 3,
    GOBLIN: 4,
    OGRE: 5,
    SPECTRE: 6,
    CRAB: 7,
    BAT: 8,
    WIZARD: 9,
    EYE: 10,
    SNAKE: 11,
    SKELETON2: 12,
    BOSS: 13,
    DEATHKNIGHT: 14,
    
    FIREFOX: 20,
    CHICKEN: 21,
    CAT: 22,
    
    SWORD: 30,
    AXE: 31,
    REDSWORD: 32,
    GOLDENSWORD: 33,
    MORNINGSTAR: 34,
    HAMMER: 35,
    
    FLASK: 40,
    BURGER: 41,
    
    FIREPOTION: 50,
    CLOTHARMOR: 51,
    LEATHERARMOR: 52,
    MAILARMOR: 53,
    PLATEARMOR: 54,
    REDARMOR: 55,
    GOLDENARMOR: 56,
    
    CAKE: 61,
    
    NPC: 70,
    GUARD: 71,
    KING: 72,
    VILLAGE: 73,
    PRIEST: 74,
    SCIENTIST: 75,
    AGENT: 76,
    RICK: 77,
    NYAN: 78,
    SORCERER: 79,
    BEACHNPC: 80,
    FORESTNPC: 81,
    DESERTNPC: 82,
    LAVANPC: 83,
    CODER: 84,
    
    GOLDCHEST: 100,
    SILVERCHEST: 101,
    BRONZECHEST: 102,
    
    TOMB: 110,
    STONE: 111,
    TREE: 112,
    TREE2: 113,
    BUSH: 114,
    FLOWER: 115,
    MUSHROOM: 116,
    CACTUS: 117,
    BOX: 118,
    CAKEBOX: 119,
    
    FIREBALL: 200,
    BOMB: 201,
    ARROW: 202
};

Types.Orientations = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

Types.getKindAsString = function(kind) {
    for(var k in Types.Entities) {
        if(Types.Entities[k] === kind) {
            return k.toLowerCase();
        }
    }
    return null;
};

Types.getKindFromString = function(kindString) {
    var kindString = kindString.toUpperCase();
    if(Types.Entities[kindString]) {
        return Types.Entities[kindString];
    }
    return null;
};

Types.getMessageTypeAsString = function(type) {
    for(var t in Types.Messages) {
        if(Types.Messages[t] === type) {
            return t;
        }
    }
    return null;
};

Types.isPlayer = function(kind) {
    return kind === Types.Entities.WARRIOR;
};

Types.isMob = function(kind) {
    return (kind >= Types.Entities.RAT && kind <= Types.Entities.DEATHKNIGHT);
};

Types.isNpc = function(kind) {
    return (kind >= Types.Entities.NPC && kind <= Types.Entities.CODER);
};

Types.isCharacter = function(kind) {
    return Types.isMob(kind) || Types.isPlayer(kind) || Types.isNpc(kind);
};

Types.isItem = function(kind) {
    return (kind >= Types.Entities.SWORD && kind <= Types.Entities.CAKE) || 
           (kind >= Types.Entities.FIREPOTION && kind <= Types.Entities.GOLDENARMOR);
};

Types.isEquipment = function(kind) {
    return Types.isWeapon(kind) || Types.isArmor(kind);
};

Types.isWeapon = function(kind) {
    return kind >= Types.Entities.SWORD && kind <= Types.Entities.HAMMER;
};

Types.isArmor = function(kind) {
    return kind >= Types.Entities.FIREPOTION && kind <= Types.Entities.GOLDENARMOR;
};

Types.isChest = function(kind) {
    return kind >= Types.Entities.GOLDCHEST && kind <= Types.Entities.BRONZECHEST;
};

Types.isDestructible = function(kind) {
    return Types.isChest(kind) || 
           (kind >= Types.Entities.TOMB && kind <= Types.Entities.CAKEBOX);
};

Types.isObject = function(kind) {
    return Types.isItem(kind) || Types.isChest(kind) || Types.isDestructible(kind);
};

if(typeof module !== 'undefined') {
    module.exports = Types;
}
