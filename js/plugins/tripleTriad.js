//=============================================================================
// Triple Triad for RPG Maker MZ
//=============================================================================

/*:
* @target MZ
 * @plugindesc Triple Triad Full Card Game.
 * @author Raizen (Mauricio Pastana)
 * @help tripleTriad.js
 * Configure all parameters on the plugin: All calls are done by Script Calls
 * To start a match : tripleTriad(enemy_id)
 * To add a card: tripleTriadAddCard(card_id)
 * To remove a card: tripleTriadRemoveCard(card_id)
 * To check if player has a certain card: tripleTriadHasCard(card_id)
 * To check the number of cards owned: tripleTriadCardsOwned()
 * To check the last match score from 1-9 : tripleTriadCheckLastScore()
 

 * @command Start Duel
 * @text 
 * @desc Start a new duel
 * 
 * @arg enemyId
 * @type number
 * @desc Enemy id configured on the plugin's parameters
 * 
 * @command Add Card
 * @text 
 * @desc Adds a new card to the pool
 * 
 * @arg cardId
 * @type number[]
 * @desc Card id configured on the plugin's parameters, you can add more than 1 card
 * 
 * @command Remove Card
 * @text 
 * @desc Removes a new card from the pool
 * 
 * @arg cardId
 * @type number[]
 * @desc Card id configured on the plugin's parameters, you can remove more than 1 card
 * 
 * @command Card Album
 * @text 
 * @desc Opens The Card Album
 
 * @param Board Map
 * @type struct<BoardMap>
 * @text Board Map Configuration
 * @param Image Configuration
 * @type struct<ImageConfiguration>
 * @text Image and Sound Configuration
 * @param Card Positions
 * @type struct<CardPosition>
 * @text Card Positions
 * @param Card Creation
 * @type struct<CardCreation>[]
 * @text Card List
 * @param Board Score
 * @type struct<ImageBoardScore>
 * @text Board Score Images
 * @param After Match
 * @type struct<AfterGame>
 * @text After Match
 * @param Album
 * @type struct<Album>
 * @text Pre Match
 * @param Album Positions
 * @type struct<AlbumPositions>
 * @text Album Text Positions
 * @param Rules
 * @type struct<RulesVocabulary>
 * @text Rules Vocabulary
 * @param Enemy Creation
 * @type struct<EnemyCreation>[]
 * @text Enemy Creation
 

 * @param Extras
 * @type struct<Extras>
 * @text Extras
 * 
 * @parent enable

 * @help This plugin does not provide plugin commands.
 */
/*~struct~Extras:
 * @param Album Back Button
 * @type file
 * @dir img/Triple_Triad/
 * @default ExtraBackBtn
 * @param Album Back Button X
 * @type number
 * @default 100
 * @param Album Back Button Y
 * @type number
 * @default 100
 * @param Album Duel Button
 * @type file
 * @dir img/Triple_Triad/
 * @default ExtraDuelBtn
 * @param Album Duel Button X
 * @type number
 * @default 500
 * @param Album Duel Button Y
 * @type number
 * @default 100
 * @param Duel Back Button
 * @type file
 * @dir img/Triple_Triad/
 * @default ExtraBackBtn
 * @param Duel Back Button X
 * @type number
 * @default 100
 * @param Duel Back Button Y
 * @type number
 * @default 100
 * @param Duel Option Button
 * @type file
 * @dir img/Triple_Triad/
 * @default ExtraOptionBtn
 * @param Duel Option Button X
 * @type number
 * @default 500
 * @param Duel Option Button Y
 * @type number
 * @default 100
 * 
 * 
 * 

 */

/*~struct~RulesVocabulary:
 * @param Rules
 * @type text
 * @default Rules
 * @param Plus
 * @type text
 * @default Plus Rule :
 * @param Same
 * @type text
 * @default Same Rule :
 * @param Combo
 * @type text
 * @default Combo Rule :
 * @param PlusWall
 * @type text
 * @default Plus Wall Rule :
 * @param SameWall
 * @type text
 * @default Same Wall Rule :
 * @param WinCon
 * @type text
 * @default Win Condition
 * @param One
 * @type note
 * @default "One - \n Winner chooses a card"
 * @param Direct
 * @type note
 * @default "Direct - \n Winners takes its cards color"
 * @param All
 * @type note
 * @default "All - \n Winners takes it all"
 * @param Yes
 * @type text
 * @default Yes
 * @param No
 * @type text
 * @default No
 */

/*~struct~AlbumPositions:
 * @param Total Owned X
 * @type number
 * @default 350
 * @param Total Owned Y
 * @type number
 * @default 42
 * @param Total Power X
 * @type number
 * @default 20
 * @param Total Power Y
 * @type number
 * @default 60
 * @param Rarity X
 * @type number
 * @default 350
 * @param Rarity Y
 * @type number
 * @default 82
 * @param Price X
 * @type number
 * @default 350
 * @param Price Y
 * @type number
 * @default 122
 * @param Description X
 * @type number
 * @default 350
 * @param Description Y
 * @type number
 * @default 162
 * @param Card Position X
 * @type number
 * @default 100
 * @param Card Position Y
 * @type number
 * @default 100
 */

/*~struct~Album:
 * @param AlbumBackground
 * @type file
 * @dir img/Triple_Triad/
 * @default table
 * @param Use_Window
 * @type boolean
 * @param HelpText
 * @type text
 * @default Choose your cards and checkout your collection!
 * @param LowCards
 * @type text
 * @default Not enough Cards!
 * @param Distance
 * @type number
 * @default 150
 * @param Cards_Hand_X
 * @type number
 * @default 20
 * @param Cards_Hand_Y
 * @type number
 * @default 200
 * @param TotalOwned
 * @type text
 * @default Total Owned:
 * @param TotalPower
 * @type text
 * @default Total Power:
 * @param Rarity
 * @type text
 * @default Rarity:
 * @param Price
 * @type text
 * @default Price:
 * @param Description
 * @type text
 * @default Description:
 */

/*~struct~AfterGame:
 * @param AfterGameBackground
 * @type file
 * @dir img/Triple_Triad/
 * @default AfterGameBackground
 * @param Player_1_X
 * @type number
 * @default 20
 * @param Player_1_Y
 * @type number
 * @default 118
 * @param Player_2_X
 * @type number
 * @default 20
 * @param Player_2_Y
 * @type number
 * @default 448
 * @param Distance_Cards
 * @type number
 * @default 150
 */

/*~struct~CardCreation:
 * @param Name
 * @type text
 * @param Power(UP)
 * @type number
 * @default 1
 * @param Power(LEFT)
 * @type number
 * @default 1
 * @param Power(RIGHT)
 * @type number
 * @default 1
 * @param Power(DOWN)
 * @type number
 * @default 1
 * @param Rarity
 * @type number
 * @max 10
 * @min 1
 * @param Price
 * @type number
 * @default 1
 * @param Image_Player_1
 * @type file
 * @dir img/Triple_Triad/
 * @param Image_Player_2
 * @type file
 * @dir img/Triple_Triad/
 * @param card_description
 * @type note
 */

/*~struct~EnemyCreation:
 * @param bgm_music
 * @type file
 * @dir audio/bgm/
 * @param Id
 * @type number
 * @default 0
 * @param enemyHand
 * @type number[]
 * @default ["0", "1", "2", "3", "4"]
 * @param enemyReserveCards
 * @type number[]
 * @default ["0", "1"]
 * @param winCondition
 * @type select
 * @option One
 * @value 0
 * @option Direct
 * @value 2
 * @option All
 * @value 3
 * @param SuddenDeath
 * @type boolean
 * @param Plus
 * @type boolean
 * @param Same
 * @type boolean
 * @param Combo
 * @type boolean
 * @param PlusWall
 * @type boolean
 * @param SameWall
 * @type boolean
 * @param Difficulty
 * @type number
 * @min 0
 * @max 4
 * @param HideCard
 * @type boolean
 */


/*~struct~CardPosition:
* @param Player_1_X
* @type number
* @default 63
* @param Player_1_Y
* @type number
* @default 118
* @param Player_2_X
* @type number
* @default 480
* @param Player_2_Y
* @type number
* @default 118
* @param Distance_Cards
* @type number
* @default 45
*/

/*~struct~ImageBoardScore:
* @param Player_1_X
* @type number
* @default 10
* @param Player_1_Y
* @type number
* @default 550
* @param Player_2_X
* @type number
* @default 750
* @param Player_2_Y
* @type number
* @default 550
* @param Score_1_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_1_Player
* @param Score_2_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_2_Player
* @param Score_3_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_3_Player
* @param Score_4_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_4_Player
* @param Score_5_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_5_Player
* @param Score_6_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_6_Player
* @param Score_7_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_7_Player
* @param Score_8_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_8_Player
* @param Score_9_Player
* @type file
* @dir img/Triple_Triad/
* @default Score_9_Player
* @param Score_1_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_1_Enemy
* @param Score_2_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_2_Enemy
* @param Score_3_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_3_Enemy
* @param Score_4_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_4_Enemy
* @param Score_5_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_5_Enemy
* @param Score_6_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_6_Enemy
* @param Score_7_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_7_Enemy
* @param Score_8_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_8_Enemy
* @param Score_9_Enemy
* @type file
* @dir img/Triple_Triad/
* @default Score_9_Enemy
*/

/*~struct~ImageConfiguration:
* @param arrow_sound
* @type file
* @dir audio/se/
* @param card_shuffle_sound
* @type file
* @dir audio/se/
* @require 1
* @param card_flipping_sound
* @type file
* @dir audio/se/
* @param main_cursor
* @type file
* @dir img/Triple_Triad/
* @default cursor
* @param main_cursor_x
* @type number
* @default 100
* @param main_cursor_y
* @type number
* @default 100
* @param player_1_arrow
* @type file
* @dir img/Triple_Triad/
* @default Player_turn1
* @param player_1_arrow_x
* @type number
* @default 30
* @param player_1_arrow_y
* @type number
* @default 30
* @param player_2_arrow_x
* @type number
* @default 600
* @param player_2_arrow_y
* @type number
* @default 30
* @param player_2_arrow
* @type file
* @dir img/Triple_Triad/
* @default Player_turn2
* @param back_card_image
* @type file
* @dir img/Triple_Triad/
* @default Back_Card
* @param Board_Image
* @type file
* @dir img/Triple_Triad/
* @default table
* @param Victory_Image
* @type file
* @dir img/Triple_Triad/
* @default You Win
* @param Draw_Image
* @type file
* @dir img/Triple_Triad/
* @default Draw
* @param Defeat_Image
* @type file
* @dir img/Triple_Triad/
* @default You Lose
* @param Same_Image
* @type file
* @dir img/Triple_Triad/
* @default Same
* @param Plus_Image
* @type file
* @dir img/Triple_Triad/
* @default Plus
* @param Combo_Image
* @type file
* @dir img/Triple_Triad/
* @default Combo
* @param card_plus_same_combo_sound
* @type file
* @dir audio/se/
* @default Bell3
* @param victoryME
* @type file
* @dir audio/me/
* @default Victory1
* @param drawME
* @type file
* @dir audio/me/
* @default Shock1
* @param defeatME
* @type file
* @dir audio/me/
* @default Defeat1
* @param usingCursor
* @type boolean
* @default false
*
*/

/*~struct~BoardMap:
* @param Row 1 Column 1
* @type number[]
* @default ["189", "35"]
* @param Row 1 Column 2
* @type number[]
* @default ["337", "35"]
* @param Row 1 Column 3
* @type number[]
* @default ["487", "35"]
* @param Row 2 Column 1
* @type number[]
* @default ["189", "223"]
* @param Row 2 Column 2
* @type number[]
* @default ["337", "223"]
* @param Row 2 Column 3
* @type number[]
* @default ["487", "223"]
* @param Row 3 Column 1
* @type number[]
* @default ["189", "412"]
* @param Row 3 Column 2
* @type number[]
* @default ["337", "412"]
* @param Row 3 Column 3
* @type number[]
* @default ["487", "412"]

*


*/


var IgnisEngine = IgnisEngine || {};
IgnisEngine.TripleTriad = IgnisEngine.TripleTriad || {};
IgnisEngine.TripleTriad.VERSION = [1, 0, 0];

const pluginName = "tripleTriad";

PluginManager.registerCommand(pluginName, "Start Duel", args => {
    const enemy_id = parseInt(args['enemyId']);
    $dataTripleTriad.enemy_id = enemy_id;
    $dataTripleTriad.push_triple_triad = true;
    SceneManager.push(Scene_Album_TT);
});

PluginManager.registerCommand(pluginName, "Add Card", args => {
    const cardList = JSON.parse(args['cardId']);
    for (const card of cardList) {
        $dataTripleTriad.all_cards.push(parseInt(card));
    }

});
PluginManager.registerCommand(pluginName, "Remove Card", args => {
    const cardList = JSON.parse(args['cardId']);
    for (const card of cardList) {
        if ($dataTripleTriad.self_tt_cards.includes(card))
            remove_specific_card_tt($dataTripleTriad.self_tt_cards, card);
        else
            remove_specific_card_tt($dataTripleTriad.all_cards, card);
    }

});
PluginManager.registerCommand(pluginName, "Card Album", args => {
    $dataTripleTriad.push_triple_triad = false;
    return SceneManager.push(Scene_Album_TT);
});
function tripleTriadHasCard(card_id) {
    return ($dataTripleTriad.self_tt_cards.includes(card_id) && $dataTripleTriad.all_cards.includes(card_id));
};

function tripleTriadCardsOwned() {
    return ($dataTripleTriad.self_tt_cards.length + $dataTripleTriad.all_cards.length);
}

function tripleTriadCheckLastScore() {
    return $dataTripleTriad.score;
}

function remove_specific_card_tt(arr, card) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === card) {
            arr.splice(i, 1);
            return;
        }
    }
};

function Game_TripleTriad() {
    this.self_tt_cards = [];
    this.enemy_tt_cards = new Array();
    this.enemy_tt_reserve = new Array();
    this.all_cards = [];
    this.board_state = [[0, 1, 8], [2, 3, 4, 5, 6, 7, 9]];
    this.currentRule = 0;
    this.score = 0;
    this.rules = [];
    this.enemy_id = 0;
    this.push_triple_triad = false;
};
var $dataTripleTriad = null;

const tt_alias_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function () {
    tt_alias_createGameObjects.call(this);
    $dataTripleTriad = new Game_TripleTriad();
};

const tt_alias_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
    contents = tt_alias_makeSaveContents.call(this);
    contents.tripleTriad = $dataTripleTriad;
    return contents;
};

const tt_alias_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
    tt_alias_extractSaveContents.call(this, contents);
    $dataTripleTriad = contents.tripleTriad;
};

//=============================================================================
// TripleTriadScene
// Description: Main System Scene
//=============================================================================


function Scene_TripleTriad() {
    this.load_plugin_parameters();
    this.initialize_enemy_variables();
    this.initialize_variables();
    this.initialize.apply(this, arguments);
    this.createWindowLayer();
    this.initialize_rules_windows();
}

Scene_TripleTriad.prototype = Object.create(Scene_Base.prototype);
Scene_TripleTriad.prototype.constructor = Scene_TripleTriad;

//-----------------------------------------------------------------------------
// Function : initialize_rules_windows - initiates the rules windows
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.initialize_rules_windows = function () {
    this._rulesWindow = new Window_TripleTriad_Rules(Graphics.boxWidth / 2 - 133, Graphics.boxHeight / 2 - 166);
    this.addWindow(this._rulesWindow);
}

//-----------------------------------------------------------------------------
// Function : load_plugin_parameters - initiates the triple triad variables
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.load_plugin_parameters = function () {
    this.card_list = JSON.parse(PluginManager.parameters('tripleTriad')['Card Creation']);
    this.card_positions = JSON.parse(PluginManager.parameters('tripleTriad')['Card Positions']);
    this.aux_images = JSON.parse(PluginManager.parameters('tripleTriad')['Image Configuration']);
    var board_map = JSON.parse(PluginManager.parameters('tripleTriad')['Board Map']);
    this.board_score_images = JSON.parse(PluginManager.parameters('tripleTriad')['Board Score']);
    this.enemy_configuration = JSON.parse(PluginManager.parameters('tripleTriad')['Enemy Creation']);
    this.extras = JSON.parse(PluginManager.parameters('tripleTriad')['Extras']);
    this.create_board_map(board_map);
    AudioManager.stopBgm();
}

//-----------------------------------------------------------------------------
// Function : create_board_map - creates the board map from a string
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_board_map = function (board) {
    this.board_map = [[[0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0]]];
    this.board_map[0][0] = this.get_board_coordinates(board['Row 1 Column 1']);
    this.board_map[1][0] = this.get_board_coordinates(board['Row 1 Column 2']);
    this.board_map[2][0] = this.get_board_coordinates(board['Row 1 Column 3']);
    this.board_map[0][1] = this.get_board_coordinates(board['Row 2 Column 1']);
    this.board_map[1][1] = this.get_board_coordinates(board['Row 2 Column 2']);
    this.board_map[2][1] = this.get_board_coordinates(board['Row 2 Column 3']);
    this.board_map[0][2] = this.get_board_coordinates(board['Row 3 Column 1']);
    this.board_map[1][2] = this.get_board_coordinates(board['Row 3 Column 2']);
    this.board_map[2][2] = this.get_board_coordinates(board['Row 3 Column 3']);

    this.board_state = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    this.board_card_values = [[false, false, false], [false, false, false], [false, false, false]];
};

//-----------------------------------------------------------------------------
// Function : initialize_enemy_variables - initiates the enemy variables
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.initialize_enemy_variables = function () {
    if ($dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id] == null) {
        var enemy_hand = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['enemyHand'].split('\"');
        var enemy_reserve = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['enemyReserveCards'].split('\"');
        $dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id] = new Array();
        $dataTripleTriad.enemy_tt_reserve[$dataTripleTriad.enemy_id] = new Array();
        for (var c = 1; c < enemy_hand.length; c += 2) {
            $dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].push(parseInt(enemy_hand[c]));
        };
        for (var c = 1; c < enemy_reserve.length; c += 2) {
            $dataTripleTriad.enemy_tt_reserve[$dataTripleTriad.enemy_id].push(parseInt(enemy_reserve[c]));
        };
    };
    if ($dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].length < 5) {
        var max = $dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].length;
        for (var c = 0; c < 5 - max; c++) {
            var get_random_card = Math.floor(Math.random() * $dataTripleTriad.enemy_tt_reserve[$dataTripleTriad.enemy_id].length)
            $dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].push($dataTripleTriad.enemy_tt_reserve[$dataTripleTriad.enemy_id][get_random_card]);
        };
    }

    this.npc_cards_hand = JSON.parse(JSON.stringify($dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id]));
    if (this.npc_cards_hand.length > 5) {
        var max = this.npc_cards_hand.length;
        for (var c = 5; c < max; c++) {
            this.npc_cards_hand.pop();
        };
    }
    this.suddenDeath = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['SuddenDeath'] == "true" ? true : false;
    this.plusRule = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['Plus'] == "true" ? true : false;
    this.sameRule = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['Same'] == "true" ? true : false;
    this.comboRule = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['Combo'] == "true" ? true : false;
    this.plusWall = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['PlusWall'] == "true" ? true : false;
    this.sameWall = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['SameWall'] == "true" ? true : false;
    this.enemy_dificulty = parseInt(JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['Difficulty']);
    this.using_enemy_back_image = JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['HideCard'] == "true" ? true : false;
    $dataTripleTriad.currentRule = parseInt(JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['winCondition']);
};

//-----------------------------------------------------------------------------
// Function : initialize_variables - initiates the triple triad variables
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.initialize_variables = function (replay = false) {
    this.arrow_movement_cycle = [0, false];
    this.phase = 0;
    this.index = 0;
    this.enemy_index = 5;
    this.board_index = [1, 1];
    if (!replay)
        this.player_cards_hand = JSON.parse(JSON.stringify($dataTripleTriad.self_tt_cards));
    this.triple_triad_frame_count = 0;
    this.cursor_end_position = new Array(0, 0);
    this.cursor_start_position = new Array(0, 0);
    this.card_end_position = new Array(0, 0);
    this.card_start_position = new Array(0, 0);
    this.card_flipping = new Array();
    this.call_plus_same_combo_animation = new Array();
    this.score = 5;
    this.first_enemy_index = 5;
    if (this.aux_images['usingCursor'] == 'true')
        this.is_using_cursor = true;
    else
        this.is_using_cursor = false;
    this.is_card_picked = false;
    this.distance_cards = parseInt(this.card_positions['Distance_Cards']);
    this.initial_position_x = parseInt(this.card_positions["Player_1_X"]);
    this.initial_position_y = parseInt(this.card_positions["Player_1_Y"]);
    this.cursor_correction_x = parseInt(this.aux_images['main_cursor_x']);
    this.cursor_correction_y = parseInt(this.aux_images['main_cursor_y']);
};

//-----------------------------------------------------------------------------
// Function : initialize - initiates the graphics
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.initialize = function () {
    Scene_Base.prototype.initialize.call(this);
    this.create_background();
    this.create_cards();
    this.create_back_cards();
    this.create_aux_images();
    this.create_same_plus_combo_images();
    this.create_score_images();
    this.create_extra_buttons();
};

//-----------------------------------------------------------------------------
// Function : create_score_images - creates score Images
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_score_images = function () {
    this._score_player_Images = new Array();
    this._score_enemy_Images = new Array();
    for (var p = 0; p < 9; p++) {
        this._score_player_Images.push(new Sprite());
        this._score_player_Images[p].bitmap = ImageManager.loadTripleTriad(this.board_score_images['Score_' + (p + 1) + '_Player']);
        this._score_player_Images[p].x = parseInt(this.board_score_images['Player_1_X']);
        this._score_player_Images[p].y = parseInt(this.board_score_images['Player_1_Y']);
        this._score_player_Images[p].opacity = 0;
        this.addChild(this._score_player_Images[p]);
    }
    for (var p = 0; p < 9; p++) {
        this._score_enemy_Images.push(new Sprite());
        this._score_enemy_Images[p].bitmap = ImageManager.loadTripleTriad(this.board_score_images['Score_' + (p + 1) + '_Enemy']);
        this._score_enemy_Images[p].x = parseInt(this.board_score_images['Player_2_X']);
        this._score_enemy_Images[p].y = parseInt(this.board_score_images['Player_2_Y']);
        this._score_enemy_Images[p].opacity = 0;
        this.addChild(this._score_enemy_Images[p]);
    }
    this._score_player_Images[4].opacity = 255;
    this._score_enemy_Images[4].opacity = 255;
};

//-----------------------------------------------------------------------------
// Function : create_background - creates background Images
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_background = function () {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = ImageManager.loadTripleTriad(this.aux_images['Board_Image']);
    this._backSprite.opacity = 0;
    this.addChild(this._backSprite);
};
//-----------------------------------------------------------------------------
// Function : create_extra_buttons - creates background image
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_extra_buttons = function () {
    this.leaveBtn = new Sprite_Clickable();
    this.leaveBtn.bitmap = ImageManager.loadTripleTriad(this.extras['Duel Back Button']);
    this.leaveBtn.x = parseInt(this.extras['Duel Back Button X'])
    this.leaveBtn.y = parseInt(this.extras['Duel Back Button Y'])
    this.addChild(this.leaveBtn);
    this.optionBtn = new Sprite_Clickable();
    this.optionBtn.bitmap = ImageManager.loadTripleTriad(this.extras['Duel Option Button']);
    this.optionBtn.x = parseInt(this.extras['Duel Option Button X'])
    this.optionBtn.y = parseInt(this.extras['Duel Option Button Y'])
    this.addChild(this.optionBtn);
}

//-----------------------------------------------------------------------------
// Function : create_same_plus_combo_images - creates same plus and combo images
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_same_plus_combo_images = function () {
    this._sameImage = new Sprite();
    this._sameImage.bitmap = ImageManager.loadTripleTriad(this.aux_images['Same_Image']);
    this._sameImage.opacity = 0;
    this.addChild(this._sameImage);
    this._plusImage = new Sprite();
    this._plusImage.bitmap = ImageManager.loadTripleTriad(this.aux_images['Plus_Image']);
    this._plusImage.opacity = 0;
    this.addChild(this._plusImage);
    this._comboImage = new Sprite();
    this._comboImage.bitmap = ImageManager.loadTripleTriad(this.aux_images['Combo_Image']);
    this._comboImage.opacity = 0;
    this.addChild(this._comboImage);
    this._sameImage.anchor.x = 0.5;
    this._sameImage.anchor.y = 0.5;
    this._plusImage.anchor.x = 0.5;
    this._plusImage.anchor.y = 0.5;
    this._comboImage.anchor.x = 0.5;
    this._comboImage.anchor.y = 0.5;
    this._same_plus_combo_distance = Graphics.width / 30;
};
//-----------------------------------------------------------------------------
// Function : create_aux_images - creates auxiliar Images
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_aux_images = function () {
    this._player_1_arrow = new Sprite();
    this._player_1_arrow.bitmap = ImageManager.loadTripleTriad(this.aux_images['player_1_arrow']);
    this._player_1_arrow.x = parseInt(this.aux_images['player_1_arrow_x']);
    this._player_1_arrow.y = parseInt(this.aux_images['player_1_arrow_y']);
    this._player_1_arrow.opacity = 0;
    this._player_1_init_arrow = new Array(this._player_1_arrow.x, this._player_1_arrow.y);
    this.addChild(this._player_1_arrow);
    this._player_2_arrow = new Sprite();
    this._player_2_arrow.bitmap = ImageManager.loadTripleTriad(this.aux_images['player_2_arrow']);
    this._player_2_arrow.x = parseInt(this.aux_images['player_2_arrow_x']);
    this._player_2_arrow.y = parseInt(this.aux_images['player_2_arrow_y']);
    this._player_2_init_arrow = new Array(this._player_2_arrow.x, this._player_2_arrow.y);
    this._player_2_arrow.opacity = 0;
    this.addChild(this._player_2_arrow);
    this._game_cursor = new Sprite();
    this._game_cursor.bitmap = ImageManager.loadTripleTriad(this.aux_images['main_cursor']);
    this._game_cursor.opacity = 0;
    this.addChild(this._game_cursor);
};

//-----------------------------------------------------------------------------
// Function : create_cards - creates Card Images Images
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_cards = function () {
    this._cards_player_1_A = new Array(5);
    this._cards_player_1_B = new Array(5);
    this._cards_player_2_A = new Array(5);
    this._cards_player_2_B = new Array(5);
    this._cards_player_2_C = new Array(5);
    for (var i = 0; i < 5; i++) {
        this.add_single_card_image(this._cards_player_1_B, i, 2);
        this.add_single_card_image(this._cards_player_2_A, i, 3);
        this.add_single_card_image(this._cards_player_2_B, i, 4);
        if (this.using_enemy_back_image)
            this.add_single_card_image(this._cards_player_2_C, i, 5);
    }
    for (var i = 0; i < 5; i++) {
        this.add_single_card_image(this._cards_player_1_A, i, 1);
    }

};

//-----------------------------------------------------------------------------
// Function : create_back_cards - creates Card Back Images
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_back_cards = function () {
    this._cards_back_board_cards = new Array(9);
    this._cards_back_enemy_cards = new Array(9);
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            this.add_single_back_image(this._cards_back_board_cards, x, y);
        }

    }
};

//-----------------------------------------------------------------------------
// Function : add_single_back_image - creates card single back image
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.add_single_back_image = function (card_pointer, x, y) {
    card_pointer[x * 3 + y] = new Sprite();
    card_pointer[x * 3 + y].x = parseInt(this.board_map[x][y][0]);
    card_pointer[x * 3 + y].y = parseInt(this.board_map[x][y][1]);
    card_pointer[x * 3 + y].bitmap = ImageManager.loadTripleTriad(this.aux_images['back_card_image']);
    this.addChild(card_pointer[x * 3 + y]);
    card_pointer[x * 3 + y].anchor.x = 0.5;
    card_pointer[x * 3 + y].anchor.y = 0.5;
    card_pointer[x * 3 + y].scale.x = 0;
    card_pointer[x * 3 + y].scale.y = 0;
}

//-----------------------------------------------------------------------------
// Function : add_single_card_image - creates card single image
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.add_single_card_image = function (card_pointer, index, type) {
    card_pointer[index] = new Sprite_Card();
    switch (type) {
        case 1:
            card_name = JSON.parse(this.card_list[this.player_cards_hand[index]])["Image_Player_1"];
            card_pointer[index].x = parseInt(this.card_positions["Player_1_X"]);
            card_pointer[index].y = parseInt(this.card_positions["Player_1_Y"]);
            break;
        case 2:
            card_name = JSON.parse(this.card_list[this.player_cards_hand[index]])["Image_Player_2"];
            card_pointer[index].x = parseInt(this.card_positions["Player_1_X"]);
            card_pointer[index].y = parseInt(this.card_positions["Player_1_Y"]);
            break;
        case 3:
            if (this.using_enemy_back_image)
                card_name = this.aux_images['back_card_image'];
            else
                card_name = JSON.parse(this.card_list[this.npc_cards_hand[index]])["Image_Player_2"];
            card_pointer[index].x = parseInt(this.card_positions["Player_2_X"]);
            card_pointer[index].y = parseInt(this.card_positions["Player_2_Y"]);
            break;
        case 4:

            card_name = JSON.parse(this.card_list[this.npc_cards_hand[index]])["Image_Player_1"];
            card_pointer[index].x = parseInt(this.card_positions["Player_2_X"]);
            card_pointer[index].y = parseInt(this.card_positions["Player_2_Y"]);
            break;
        case 5:
            card_name = JSON.parse(this.card_list[this.npc_cards_hand[index]])["Image_Player_2"];
            card_pointer[index].x = parseInt(this.card_positions["Player_2_X"]);
            card_pointer[index].y = parseInt(this.card_positions["Player_2_Y"]);
            break;

    }
    card_pointer[index].bitmap = ImageManager.loadTripleTriad(card_name);
    card_pointer[index].opacity = 0;
    this.addChild(card_pointer[index]);
    card_pointer[index].anchor.x = 0.5;
    card_pointer[index].anchor.y = 0.5;
};


//-----------------------------------------------------------------------------
// Function : get_board_coordinates - gets board coodinates from string
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.get_board_coordinates = function (arr) {
    var coord_array = arr.split('\"');
    return [parseInt(coord_array[1]), parseInt(coord_array[3])];
};
//////////////////////////// MAIN UPDATE //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : update - updates board state
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update = function () {
    Scene_Base.prototype.update.call(this);
    this.triple_triad_frame_count++;
    if (!this.is_using_cursor || this.player_turn == 1)
        this.move_cursor();
    if (this.phase >= 4)
        this.move_player_arrow();
    switch (this.phase) {
        case 0:
            this.update_opacity();
            break;
        case 1:
            this.move_cards_initial_position();
            break;
        case 2:
            this.show_rules();
            break;
        case 3:
            this.move_deciding_player();
            break;
        case 4:
            this.choose_play();
            break;
        case 5:
            this.place_card_on_board();
            break;
        case 6:
            this.move_card_to_board();
            break;
        case 7:
            this.check_flip_conditions();
            break;
        case 8:
            this.pass_turn_end_game();
            break;
        case 9:
            this.end_game();
            break;
    }


};

//////////////////////////// AUX UPDATE //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : move_arrow_to_player - moves arrow to player
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_arrow_to_player = function () {
    if (this.player_turn == 0) {
        var x = parseInt(this.aux_images['player_2_arrow_x']) - parseInt(this.aux_images['player_1_arrow_x']);
        this._player_1_arrow.x -= parseInt(x / 15);
        this._player_2_arrow.x -= parseInt(x / 15);
        this._player_1_arrow.opacity += 15;
        this._player_2_arrow.opacity -= 15;
        if (this._player_1_arrow.x < parseInt(this.aux_images['player_1_arrow_x'])) {
            this._player_1_arrow.x = parseInt(this.aux_images['player_1_arrow_x']);
            this._player_2_arrow.x = parseInt(this.aux_images['player_1_arrow_x']);
        }
    }
    else {
        var x = parseInt(this.aux_images['player_2_arrow_x']) - parseInt(this.aux_images['player_1_arrow_x']);
        this._player_1_arrow.x += parseInt(x / 15);
        this._player_2_arrow.x += parseInt(x / 15);
        this._player_1_arrow.opacity -= 15;
        this._player_2_arrow.opacity += 15;
        if (this._player_2_arrow.x > parseInt(this.aux_images['player_2_arrow_x'])) {
            this._player_1_arrow.x = parseInt(this.aux_images['player_2_arrow_x']);
            this._player_2_arrow.x = parseInt(this.aux_images['player_2_arrow_x']);
        }
    }
}
//-----------------------------------------------------------------------------
// Function : move_player_arrow - moves player arrow
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_player_arrow = function () {
    if (this.player_turn == 0) {
        if (this._player_1_arrow.x != parseInt(this.aux_images['player_1_arrow_x'])) {
            this.move_arrow_to_player();
            return;
        }
    }
    else {
        if (this._player_2_arrow.x != parseInt(this.aux_images['player_2_arrow_x'])) {
            this.move_arrow_to_player();
            return;
        }
    }
    if (this.arrow_movement_cycle[1]) {
        this._player_1_arrow.y -= 1;
        this._player_2_arrow.y -= 1;
        this.arrow_movement_cycle[0]--;
        if (this.arrow_movement_cycle[0] <= 0)
            this.arrow_movement_cycle[1] = false;
    }
    else {
        this._player_1_arrow.y += 1;
        this._player_2_arrow.y += 1;
        this.arrow_movement_cycle[0]++;
        if (this.arrow_movement_cycle[0] >= 10)
            this.arrow_movement_cycle[1] = true;
    }

};

//-----------------------------------------------------------------------------
// Function : move_cursor - move_cursor animation
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_cursor = function () {
    if (this.is_cursor_moving())
        return;
    else {
        if (this.triple_triad_frame_count >= 15) {
            this._game_cursor.x = this.cursor_end_position[0] + this.cursor_correction_x;
            this._game_cursor.y = this.cursor_end_position[1] + this.cursor_correction_y;
        }
        else {
            var x = this.cursor_end_position[0] - this.cursor_start_position[0] + this.cursor_correction_x;
            var y = this.cursor_end_position[1] - this.cursor_start_position[1] + this.cursor_correction_y;
            this._game_cursor.x += parseInt(x / 15);
            this._game_cursor.y += parseInt(y / 15);
        }
    }
};

//////////////////////////// PHASE 0 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : update_opacity - updates initial opacity
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_opacity = function () {
    if (this._backSprite.opacity < 255)
        this._backSprite.opacity += 10;
    else if (this._cards_player_1_A[1].opacity < 255) {
        this._cards_player_1_A.forEach(this.change_opacity);
        this._cards_player_2_A.forEach(this.change_opacity);
    }
    else {
        AudioManager.playSe({ name: this.aux_images['card_shuffle_sound'], pan: 0, pitch: 100, volume: 100 });
        this.phase = 1;
    }
};

//-----------------------------------------------------------------------------
// Function : move_to_intial_position - moves cards to initial position
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_to_intial_position = function (element, index, array) {
    element.y = parseInt(element.y);
    element.y += index;
};

//-----------------------------------------------------------------------------
// Function : change_opacity - updates current opacity
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.change_opacity = function (element, index, array) {
    element.opacity += 5;
};

//////////////////////////// PHASE 1 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : move_cards_initial_position - moves cards to initial position
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_cards_initial_position = function () {
    if (this._cards_player_1_A[1].y < parseInt(this._cards_player_1_A[0].y) + this.distance_cards) {
        this._cards_player_1_A.forEach(this.move_to_intial_position);
        this._cards_player_1_B.forEach(this.move_to_intial_position);
        this._cards_player_2_A.forEach(this.move_to_intial_position);
        this._cards_player_2_B.forEach(this.move_to_intial_position);
    }
    else {
        this.player_turn = Math.floor(Math.random() * 2);
        this.phase = 2;
        this.starting_choosing_player_speed = 1;
        this.triple_triad_frame_count = 0;
    }

};

//////////////////////////// PHASE 2 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : show_rules - Shows the rules of the duel
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.show_rules = function () {
    if (Input.isTriggered('cancel') || Input.isTriggered('ok') || TouchInput.isTriggered()) {
        this._rulesWindow.close();
        AudioManager.playBgm({ name: JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['bgm_music'], pan: 0, pitch: 100, volume: 100 });
        this.phase = 3;

    }
};
//////////////////////////// PHASE 3 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : move_deciding_player - rotates deciding player arrow
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_deciding_player = function () {
    if (this._player_1_arrow.opacity < 255 && this.starting_choosing_player_speed == 1) {
        this._player_1_arrow.opacity += 20;
        this._player_2_arrow.opacity += 20;
    }
    else if (this.starting_choosing_player_speed < (20 + this.player_turn)) {
        if (this.triple_triad_frame_count % this.starting_choosing_player_speed == 0) {
            this.starting_choosing_player_speed += 1;
            this.triple_triad_frame_count = 0;
            if (this.starting_choosing_player_speed % 2 == 0) {
                this._player_2_arrow.opacity = 0;
                this._player_1_arrow.opacity = 255;
            }
            else {
                this._player_1_arrow.opacity = 0;
                this._player_2_arrow.opacity = 255;
            }
            AudioManager.playSe({ name: this.aux_images['arrow_sound'], pan: 0, pitch: 100, volume: 100 });
        }
    }
    else if (this.player_turn == 0) {
        this._player_2_arrow.opacity = 0;
        this._player_1_arrow.opacity = 255;
        this._player_2_arrow.x = this._player_1_arrow.x;
        this._player_2_arrow.y = this._player_1_arrow.y;
        this._game_cursor.opacity = 255;
        this.card_end_position = [this._cards_player_1_A[0].x, this._cards_player_1_A[0].y];
        this.card_start_position = this.card_end_position;
        this.phase = 4;
        this.update_player_card_index(0);
        this.triple_triad_frame_count = 2;
    }
    else {
        this._player_2_arrow.opacity = 255;
        this._player_1_arrow.opacity = 0;
        this._player_1_arrow.x = this._player_2_arrow.x;
        this._player_1_arrow.y = this._player_2_arrow.y;
        this._game_cursor.opacity = 255;
        this.triple_triad_frame_count = 0;
        this.phase = 4;
        this._game_cursor.x = this._cards_player_2_A[0].x + this.cursor_correction_x;
        this._game_cursor.y = this._cards_player_2_A[0].y + this.cursor_correction_y;
        this.update_enemy_card_index(this.enemy_index);
        this.create_npc_play();
    }


};

//-----------------------------------------------------------------------------
// Function : create_npc_play - creates npc play
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.create_npc_play = function () {
    this.player_turn = 1;
    this.choose_best_npc_play();
};

//////////////////////////// PHASE 4 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : choose_play - play card movements
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.choose_play = function () {
    this.player_turn == 0 ? this.update_player_hand() : this.update_npc_hand();
};
//-----------------------------------------------------------------------------
// Function : get_card_touch - Gets the card by cursor
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.get_card_touch = function () {
    for (var i = 4; i >= 0; i--) {
        if (this.has_card_on_board(i))
            continue;
        if (this._cards_player_1_A[i]._touching) {
            return i;
        }
    }
    if (this.is_card_picked == true && TouchInput.isPressed())
        return this.index;
    return -1;
};
//-----------------------------------------------------------------------------
// Function : check_board_placement - Checks if card can be placed on board
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_board_placement = function (x, y) {
    for (var x1 = 0; x1 <= 2; x1++)
        for (var y1 = 0; y1 <= 2; y1++) {
            if (x > this.board_map[x1][y1][0] - this._cards_player_1_A[0].width / 2 &&
                x < this.board_map[x1][y1][0] + this._cards_player_1_A[0].width / 2 &&
                y > this.board_map[x1][y1][1] - this._cards_player_1_A[0].height / 2 &&
                y < this.board_map[x1][y1][1] + this._cards_player_1_A[0].height / 2 &&
                this.board_state[x1][y1] == -1) {
                this.board_index = [x1, y1];
                return true;
            }

        }
    return false;
};
//-----------------------------------------------------------------------------
// Function : move_by_cursor - Move by cursor block
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_by_cursor = function () {
    var i = this.get_card_touch();
    if (i == -1 && this.triple_triad_frame_count <= 15) {
        this.is_card_picked = false;
        if (this.triple_triad_frame_count == 1) {
            this.card_start_position = [this._cards_player_1_A[this.index].x, this._cards_player_1_A[this.index].y];
            if (this.check_board_placement(TouchInput.x, TouchInput.y)) {
                SoundManager.playOk();
                this.board_state[this.board_index[0]][this.board_index[1]] = this.index;
                this.phase = 6;
                this.set_card_end_position();
                this.triple_triad_frame_count = 0;

                return;
            }
            else
                SoundManager.playBuzzer();
        }
    }
    if (!this.is_card_picked && this.triple_triad_frame_count <= 15) {
        this.move_card_to_board(false);
        return;
    }

    if (i >= 0) {
        this._game_cursor.x = TouchInput.x;
        this._game_cursor.y = TouchInput.y;
        this.index = i;
        if (!this.is_card_picked)
            this.card_end_position = [this.initial_position_x, this.initial_position_y + this.distance_cards * this.index];
        this.is_card_picked = true;
        this.triple_triad_frame_count = 0;
        this._cards_player_1_A[i].x = TouchInput.x;
        this._cards_player_1_A[i].y = TouchInput.y;
    }
};

//-----------------------------------------------------------------------------
// Function : update_player_hand - updates player cursor
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_player_hand = function () {
    if (this.is_using_cursor) {
        this.move_by_cursor();
        return;
    }
    this.move_chosen_card_index(this.index);
    if (!this.is_cursor_moving())
        return;
    if (Input.isRepeated('down')) {
        SoundManager.playCursor();
        this.update_player_card_index(1);
    }
    if (Input.isRepeated('up')) {
        SoundManager.playCursor();
        this.update_player_card_index(-1);
    }
    if (Input.isTriggered('ok')) {
        SoundManager.playOk();
        this.phase = 5;
        this.set_cursor_end_position(parseInt(this.board_map[1][1][0]), parseInt(this.board_map[1][1][1]));
    }

};

//-----------------------------------------------------------------------------
// Function : update_npc_hand - updates npc cursor
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_npc_hand = function () {
    this.move_chosen_card_index_enemy(this.first_enemy_index - 5);
    if (!this.is_cursor_moving())
        return;
    if (this.triple_triad_frame_count <= 40)
        return;
    if (this.first_enemy_index < this.enemy_index) {
        this.update_enemy_next_card_index();
        this.update_enemy_card_index(this.first_enemy_index);
        this.triple_triad_frame_count = 0;
    }
    else
        this.phase = 5;
};
//-----------------------------------------------------------------------------
// Function : update_player_card_index - updates index
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_player_card_index = function (ind) {
    this.index += ind;
    if (this.index == -1)
        this.index = 4;
    if (this.index == 5)
        this.index = 0;
    if (this.has_card_on_board(this.index))
        this.update_player_card_index(ind);
    else
        this.set_cursor_end_position(this._cards_player_1_A[this.index].x, this._cards_player_1_A[this.index].y);
};

//-----------------------------------------------------------------------------
// Function : update_player_card_index - updates index
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_enemy_next_card_index = function () {
    this.first_enemy_index += 1;
    while (this.has_card_on_board(this.first_enemy_index))
        this.first_enemy_index += 1;
};

//-----------------------------------------------------------------------------
// Function : move_chosen_card_index - moves the chosen  card
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_chosen_card_index = function (ind) {
    if (parseInt(this.card_positions["Player_1_X"]) + 12 > this._cards_player_1_A[ind].x)
        this._cards_player_1_A[ind].x += 1;
    if (this._cards_player_1_A[ind].opacity < 255)
        this._cards_player_1_A[ind].opacity += 10;
    for (var i = 0; i < 5; i++) {
        if (i == ind || this.has_card_on_board(i))
            continue;
        if (this._cards_player_1_A[i].x > parseInt(this.card_positions["Player_1_X"]))
            this._cards_player_1_A[i].x -= 1;
        if (this._cards_player_1_A[i].opacity > 150)
            this._cards_player_1_A[i].opacity -= 10;

    }
};

//-----------------------------------------------------------------------------
// Function : move_chosen_card_index_enemy - moves the chosen  card
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_chosen_card_index_enemy = function (ind) {
    if (parseInt(this.card_positions["Player_2_X"]) < this._cards_player_2_A[ind].x + 12)
        this._cards_player_2_A[ind].x -= 1;
    if (this._cards_player_2_A[ind].opacity < 255)
        this._cards_player_2_A[ind].opacity += 10;
    for (var i = 0; i < 5; i++) {
        if (i == ind || this.has_card_on_board(i + 5))
            continue;
        if (this._cards_player_2_A[i].x < parseInt(this.card_positions["Player_2_X"]))
            this._cards_player_2_A[i].x += 1;
        if (this._cards_player_2_A[i].opacity > 150)
            this._cards_player_2_A[i].opacity -= 10;

    }
};



//-----------------------------------------------------------------------------
// Function : update_enemy_card_index - updates index
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_enemy_card_index = function (ind) {
    this.set_cursor_end_position(this._cards_player_2_A[ind - 5].x, this._cards_player_2_A[ind - 5].y);
};

//////////////////////////// PHASE 5 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : place_card_on_board - card move to board
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.place_card_on_board = function () {
    if (!this.is_cursor_moving())
        return;
    this.player_turn == 0 ? this.place_player_card_on_board() : this.place_enemy_card_on_board();
};

//-----------------------------------------------------------------------------
// Function : place_enemy_card_on_board - places enemy card on board
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.place_enemy_card_on_board = function () {
    if (this.has_card_on_board(this.enemy_index)) {
        this.set_card_end_position();
        this.phase = 6;
        this.triple_triad_frame_count = 0;
    }
    else {
        if (this.using_enemy_back_image) {
            this._cards_player_2_C[this.enemy_index - 5].x = parseInt(this.board_map[this.board_index[0]][this.board_index[1]][0]);
            this._cards_player_2_C[this.enemy_index - 5].y = parseInt(this.board_map[this.board_index[0]][this.board_index[1]][1]);
        }
        this.board_state[this.board_index[0]][this.board_index[1]] = this.enemy_index;
        this.set_cursor_end_position(parseInt(this.board_map[this.board_index[0]][this.board_index[1]][0]), parseInt(this.board_map[this.board_index[0]][this.board_index[1]][1]));
    }

};

//-----------------------------------------------------------------------------
// Function : place_player_card_on_board - card move to board
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.place_player_card_on_board = function () {
    if (Input.isRepeated('up')) {
        SoundManager.playCursor();
        this.update_board_position(0, -1);
        return;
    }
    if (Input.isRepeated('down')) {
        SoundManager.playCursor();
        this.update_board_position(0, 1);
        return;
    }
    if (Input.isRepeated('left')) {
        SoundManager.playCursor();
        this.update_board_position(-1, 0);
        return;
    }
    if (Input.isRepeated('right')) {
        SoundManager.playCursor();
        this.update_board_position(1, 0);
        return;
    }
    if (Input.isTriggered('cancel')) {
        SoundManager.playCancel();
        this.update_player_card_index(0);
        this.phase = 4;
        this.board_index = [1, 1];
        return;
    }
    if (Input.isTriggered('ok')) {
        if (this.board_state[this.board_index[0]][this.board_index[1]] != -1) {
            SoundManager.playBuzzer();
            return;
        }

        SoundManager.playOk();
        this.board_state[this.board_index[0]][this.board_index[1]] = this.index;
        this.phase = 6;
        this.set_card_end_position();
        this.triple_triad_frame_count = 0;
        return;
    }
};

//-----------------------------------------------------------------------------
// Function : update_board_position - updates board cursor position
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_board_position = function (x, y) {
    this.board_index[0] += x;
    this.board_index[1] += y;
    if (this.board_index[0] == -1) this.board_index[0] = 2;
    if (this.board_index[1] == -1) this.board_index[1] = 2;
    if (this.board_index[0] == 3) this.board_index[0] = 0;
    if (this.board_index[1] == 3) this.board_index[1] = 0;
    this.set_cursor_end_position(parseInt(this.board_map[this.board_index[0]][this.board_index[1]][0]), parseInt(this.board_map[this.board_index[0]][this.board_index[1]][1]));
};

//-----------------------------------------------------------------------------
// Function : set_card_end_position - sets the final position of the card
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.set_card_end_position = function () {
    this.card_end_position = [parseInt(this.board_map[this.board_index[0]][this.board_index[1]][0]), parseInt(this.board_map[this.board_index[0]][this.board_index[1]][1])];
    if (this.player_turn == 0)
        this.card_start_position = [this._cards_player_1_A[this.index].x, this._cards_player_1_A[this.index].y];
    else
        this.card_start_position = [this._cards_player_2_A[this.enemy_index - 5].x, this._cards_player_2_A[this.enemy_index - 5].y];
};

//////////////////////////// PHASE 6 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : move_card_to_board - moves card to the board
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.move_card_to_board = function (board = true) {

    if (this.player_turn == 0) {
        if (this.triple_triad_frame_count >= 15) {
            this._cards_player_1_A[this.index].x = this.card_end_position[0];
            this._cards_player_1_A[this.index].y = this.card_end_position[1];
            if (board) {
                this.add_card_board_information();
                this.phase = 7;
            }

        }
        else {
            var x = this.card_end_position[0] - this.card_start_position[0];
            var y = this.card_end_position[1] - this.card_start_position[1];
            this._cards_player_1_A[this.index].x += parseInt(x / 15);
            this._cards_player_1_A[this.index].y += parseInt(y / 15);
            if (board) {
                for (var i = 0; i < 5; i++) {
                    if (!this.has_card_on_board(i))
                        this._cards_player_1_A[i].opacity += 10;
                }
            }

        }
    }
    else {
        if (this.triple_triad_frame_count >= 15) {
            this._cards_player_2_A[this.enemy_index - 5].x = this.card_end_position[0];
            this._cards_player_2_A[this.enemy_index - 5].y = this.card_end_position[1];
            if (board) {
                this.add_card_board_information();
                this.phase = 7;
            }
        }
        else {
            var x = this.card_end_position[0] - this.card_start_position[0];
            var y = this.card_end_position[1] - this.card_start_position[1];
            this._cards_player_2_A[this.enemy_index - 5].x += parseInt(x / 15);
            this._cards_player_2_A[this.enemy_index - 5].y += parseInt(y / 15);
            if (board) {
                for (var i = 5; i < 10; i++) {
                    if (!this.has_card_on_board(i))
                        this._cards_player_2_A[i - 5].opacity += 10;
                }
            }
        }
    }
};

//-----------------------------------------------------------------------------
// Function : add_card_board_information - adds card information to the board
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.add_card_board_information = function () {
    if (this.player_turn == 0) {
        var up = parseInt(JSON.parse(this.card_list[this.player_cards_hand[this.index]])["Power(UP)"]);
        var left = parseInt(JSON.parse(this.card_list[this.player_cards_hand[this.index]])["Power(LEFT)"]);
        var right = parseInt(JSON.parse(this.card_list[this.player_cards_hand[this.index]])["Power(RIGHT)"]);
        var down = parseInt(JSON.parse(this.card_list[this.player_cards_hand[this.index]])["Power(DOWN)"]);
    }
    else {
        var up = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[this.enemy_index - 5]])["Power(UP)"]);
        var left = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[this.enemy_index - 5]])["Power(LEFT)"]);
        var right = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[this.enemy_index - 5]])["Power(RIGHT)"]);
        var down = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[this.enemy_index - 5]])["Power(DOWN)"]);
    }
    this.board_card_values[this.board_index[0]][this.board_index[1]] = [up, left, right, down, this.player_turn];
};


//////////////////////////// PHASE 7 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : check_flip_conditions - check_flip_conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_flip_conditions = function () {
    if (this.plusRule)
        this.check_plus_flip_condition(this.board_index[0], this.board_index[1]);
    if (this.sameRule)
        this.check_same_flip_condition(this.board_index[0], this.board_index[1]);
    if (this.comboRule)
        this.check_combo_flip_condition();
    this.check_normal_flip_condition(this.board_index[0] - 1, this.board_index[1], this.board_index[0], this.board_index[1]);
    this.check_normal_flip_condition(this.board_index[0] + 1, this.board_index[1], this.board_index[0], this.board_index[1]);
    this.check_normal_flip_condition(this.board_index[0], this.board_index[1] - 1, this.board_index[0], this.board_index[1]);
    this.check_normal_flip_condition(this.board_index[0], this.board_index[1] + 1, this.board_index[0], this.board_index[1]);

    if (this.using_enemy_back_image && this.player_turn == 1)
        this.card_flipping.unshift([this.board_index[0], this.board_index[1], 8]);
    this.phase_flip = 0;
    this.phase = 8;
};
//-----------------------------------------------------------------------------
// Function : check_combo_flip_condition - checks the combo flip conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_combo_flip_condition = function (x, y) {
    for (var i = 0; i < this.card_flipping.length; i++) {
        this.check_normal_flip_condition(this.card_flipping[i][0] - 1, this.card_flipping[i][1], this.card_flipping[i][0], this.card_flipping[i][1], 6);
        this.check_normal_flip_condition(this.card_flipping[i][0] + 1, this.card_flipping[i][1], this.card_flipping[i][0], this.card_flipping[i][1], 6);
        this.check_normal_flip_condition(this.card_flipping[i][0], this.card_flipping[i][1] - 1, this.card_flipping[i][0], this.card_flipping[i][1], 6);
        this.check_normal_flip_condition(this.card_flipping[i][0], this.card_flipping[i][1] + 1, this.card_flipping[i][0], this.card_flipping[i][1], 6);
    }
};

//-----------------------------------------------------------------------------
// Function : check_same_flip_condition - checks the same flip conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_same_flip_condition = function (x, y) {
    var same = new Array();
    var same_num = new Array();
    if (x + 1 <= 2 && this.board_card_values[x + 1][y] != false) {
        same.push([x + 1, y, this.board_card_values[x][y][2] == this.board_card_values[x + 1][y][1], 4]);
        same_num.push(this.board_card_values[x][y][2] == this.board_card_values[x + 1][y][1]);
    }
    if (x - 1 >= 0 && this.board_card_values[x - 1][y] != false) {
        same.push([x - 1, y, this.board_card_values[x][y][1] == this.board_card_values[x - 1][y][2], 4]);
        same_num.push(this.board_card_values[x][y][1] == this.board_card_values[x - 1][y][2]);
    }
    if (y + 1 <= 2 && this.board_card_values[x][y + 1] != false) {
        same.push([x, y + 1, this.board_card_values[x][y][3] == this.board_card_values[x][y + 1][0], 5]);
        same_num.push(this.board_card_values[x][y][3] == this.board_card_values[x][y + 1][0]);
    }
    if (y - 1 >= 0 && this.board_card_values[x][y - 1] != false) {
        same.push([x, y - 1, this.board_card_values[x][y][0] == this.board_card_values[x][y - 1][3], 5]);
        same_num.push(this.board_card_values[x][y][0] == this.board_card_values[x][y - 1][3]);
    }
    if (this.sameWall) {
        if (x + 1 == 3)
            same_num.push(this.board_card_values[x][y][2] == 10);
        if (x - 1 == -1)
            same_num.push(this.board_card_values[x][y][1] == 10);
        if (y + 1 == 3)
            same_num.push(this.board_card_values[x][y][3] == 10);
        if (y - 1 == -1)
            same_num.push(this.board_card_values[x][y][0] == 10);
    }

    for (var i = 0; i < same.length; i++) {
        if (this.board_card_values[same[i][0]][same[i][1]][4] == this.player_turn)
            continue;
        if (same_num.count(true) >= 2 && same[i][2] == true) {
            this.card_flipping.unshift([same[i][0], same[i][1], same[i][3]]);
            this.board_card_values[same[i][0]][same[i][1]][4] = this.player_turn;
        }

    }

};

//-----------------------------------------------------------------------------
// Function : check_plus_flip_condition - checks the plus flip conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_plus_flip_condition = function (x, y) {
    var sum = new Array();
    var sum_num = new Array();
    if (x + 1 <= 2 && this.board_card_values[x + 1][y] != false) {
        sum.push([x + 1, y, this.board_card_values[x][y][2] + this.board_card_values[x + 1][y][1], 2]);
        sum_num.push(this.board_card_values[x][y][2] + this.board_card_values[x + 1][y][1]);
    }
    if (x - 1 >= 0 && this.board_card_values[x - 1][y] != false) {
        sum.push([x - 1, y, this.board_card_values[x][y][1] + this.board_card_values[x - 1][y][2], 2]);
        sum_num.push(this.board_card_values[x][y][1] + this.board_card_values[x - 1][y][2]);
    }
    if (y + 1 <= 2 && this.board_card_values[x][y + 1] != false) {
        sum.push([x, y + 1, this.board_card_values[x][y][3] + this.board_card_values[x][y + 1][0], 3]);
        sum_num.push(this.board_card_values[x][y][3] + this.board_card_values[x][y + 1][0]);
    }
    if (y - 1 >= 0 && this.board_card_values[x][y - 1] != false) {
        sum.push([x, y - 1, this.board_card_values[x][y][0] + this.board_card_values[x][y - 1][3], 3]);
        sum_num.push(this.board_card_values[x][y][0] + this.board_card_values[x][y - 1][3]);
    }
    if (this.plusWall) {
        if (x + 1 == 3)
            sum_num.push(this.board_card_values[x][y][2] + 10);
        if (x - 1 == -1)
            sum_num.push(this.board_card_values[x][y][1] + 10);
        if (y + 1 == 3)
            sum_num.push(this.board_card_values[x][y][3] + 10);
        if (y - 1 == -1)
            sum_num.push(this.board_card_values[x][y][0] + 10);
    }


    for (var i = 0; i < sum.length; i++) {
        if (this.board_card_values[sum[i][0]][sum[i][1]][4] == this.player_turn)
            continue;
        if (sum_num.count(sum[i][2]) >= 2) {
            this.card_flipping.unshift([sum[i][0], sum[i][1], sum[i][3]]);
            this.board_card_values[sum[i][0]][sum[i][1]][4] = this.player_turn;
        }

    }

};

//-----------------------------------------------------------------------------
// Function : check_normal_flip_condition - checks the normal flip conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_normal_flip_condition = function (x, y, self_card_x, self_card_y, combo = 0) {
    if (x < 0 || x > 2 || y < 0 || y > 2)
        return;
    if (this.board_card_values[x][y] == false)
        return;
    if (this.board_card_values[x][y][4] == this.player_turn)
        return;
    if (x < self_card_x)
        if (this.board_card_values[x][y][2] < this.board_card_values[x + 1][y][1]) {
            this.card_flipping.push([x, y, 0 + combo]);
            this.board_card_values[x][y][4] = this.player_turn;
        }
    if (x > self_card_x)
        if (this.board_card_values[x][y][1] < this.board_card_values[x - 1][y][2]) {
            this.card_flipping.push([x, y, 0 + combo]);
            this.board_card_values[x][y][4] = this.player_turn;
        }
    if (y < self_card_y)
        if (this.board_card_values[x][y][3] < this.board_card_values[x][y + 1][0]) {
            this.card_flipping.push([x, y, 1 + combo]);
            this.board_card_values[x][y][4] = this.player_turn;
        }
    if (y > self_card_y)
        if (this.board_card_values[x][y][0] < this.board_card_values[x][y - 1][3]) {
            this.card_flipping.push([x, y, 1 + combo]);
            this.board_card_values[x][y][4] = this.player_turn;
        }
};

//////////////////////////// PHASE 8 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : pass_turn_end_game - passes the turn or ends the game
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.pass_turn_end_game = function () {
    this.perform_plus_same_combo();
    if (this.is_flipping()) {
        this.perform_flip();
        return;
    }
    if (this.board_is_full()) {
        this._endGameImage = new Sprite();
        this.phase = 9;

        this._player_1_arrow.opacity = 0;
        this._player_2_arrow.opacity = 0;
        this._game_cursor.opacity = 0;
        this.triple_triad_frame_count = 0;
        if (this.score > 5) {
            this._endGameImage.bitmap = ImageManager.loadTripleTriad(this.aux_images['Victory_Image']);
            AudioManager.playMe({ name: this.aux_images['victoryME'], pan: 0, pitch: 100, volume: 100 });
            AudioManager.stopBgm();
        }
        else if (this.score == 5) {
            this._endGameImage.bitmap = ImageManager.loadTripleTriad(this.aux_images['Draw_Image']);
            AudioManager.playMe({ name: this.aux_images['drawME'], pan: 0, pitch: 100, volume: 100 });
        }
        else {
            this._endGameImage.bitmap = ImageManager.loadTripleTriad(this.aux_images['Defeat_Image']);
            AudioManager.playMe({ name: this.aux_images['defeatME'], pan: 0, pitch: 100, volume: 100 });
            AudioManager.stopBgm();
        }
        this.addChild(this._endGameImage);
        this._endGameImage.scale.y = 0;
        this._endGameImage.anchor.x = 0.5;
        this._endGameImage.anchor.y = 0.5;
        this._endGameImage.x = Graphics.width / 2;
        this._endGameImage.y = Graphics.height / 2;
        return;
    }

    if (this.player_turn == 1) {
        this.triple_triad_frame_count = 0;
        this.board_index = [1, 1];
        this.phase = 4;
        var first_player_index = this.get_first_player_index();
        this.index = first_player_index;
        this.card_end_position = [this._cards_player_1_A[first_player_index].x, this._cards_player_1_A[first_player_index].y];
        this.card_start_position = this.card_end_position;
        this.set_cursor_end_position(this._cards_player_1_A[first_player_index].x, this._cards_player_1_A[first_player_index].y);
        if (this.is_using_cursor) {
            this.triple_triad_frame_count = 2;
        }
        this.player_turn = 0;
    }
    else {
        this.triple_triad_frame_count = 0;
        this.phase = 4;
        this.player_turn = 1;
        this.first_enemy_index = this.get_first_enemy_index();
        this.set_cursor_end_position(this._cards_player_2_A[this.first_enemy_index - 5].x, this._cards_player_2_A[this.first_enemy_index - 5].y);
        this.choose_best_npc_play();
    }
};
//-----------------------------------------------------------------------------
// Function : perform_plus_same_combo - performs same plus combo animation
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.get_first_player_index = function () {
    for (var i = 0; i < 5; i++)
        if (!this.has_card_on_board(i))
            return i;
    return 0;
};
//-----------------------------------------------------------------------------
// Function : perform_plus_same_combo - performs same plus combo animation
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.get_first_enemy_index = function () {
    for (var i = 5; i < 10; i++)
        if (!this.has_card_on_board(i))
            return i;
    return 0;
};

//-----------------------------------------------------------------------------
// Function : perform_plus_same_combo - performs same plus combo animation
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.perform_plus_same_combo = function () {
    if (this.call_plus_same_combo_animation.length == 0)
        return;
    switch (this.call_plus_same_combo_animation[0][0]) {
        case 0:
            this.perform_type_animation(this._plusImage);
            break;
        case 1:
            this.perform_type_animation(this._sameImage);
            break;
        case 2:
            this.perform_type_animation(this._comboImage);
            break;
    }


};

//-----------------------------------------------------------------------------
// Function : perform_type_animation - performs all combo animations
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.perform_type_animation = function (image) {
    if (this.call_plus_same_combo_animation[0][1] == 0)
        AudioManager.playSe({ name: this.aux_images['card_plus_same_combo_sound'], pan: 0, pitch: 100, volume: 100 });
    if (this.call_plus_same_combo_animation[0][1] < 15) {
        image.x -= this._same_plus_combo_distance;
        image.opacity += 18;
    }
    this.call_plus_same_combo_animation[0][1]++;
    if (this.call_plus_same_combo_animation[0][1] >= 40) {
        image.opacity = 0;
        this.call_plus_same_combo_animation.shift();
    }
};

//-----------------------------------------------------------------------------
// Function : perform_flip - flipping card animation
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.perform_flip = function () {
    var index = this.board_state[this.card_flipping[0][0]][this.card_flipping[0][1]];
    if (this.card_flipping[0][2] >= 2 && this.card_flipping[0][2] <= 3) {
        this.card_flipping[0][2] -= 2;
        this.input_plus_same_combo_animation(0);
    }
    if (this.card_flipping[0][2] >= 4 && this.card_flipping[0][2] <= 5) {
        this.card_flipping[0][2] -= 4;
        this.input_plus_same_combo_animation(1);
    }
    if (this.card_flipping[0][2] >= 6 && this.card_flipping[0][2] <= 7) {
        this.card_flipping[0][2] -= 6;
        this.input_plus_same_combo_animation(2);
    }

    if (this.player_turn == 1) {
        if (this.card_flipping[0][2] == 0)
            if (index > 4)
                this.flip_x_card(this._cards_player_2_B, this._cards_player_2_A, index - 5);
            else
                this.flip_x_card(this._cards_player_1_A, this._cards_player_1_B, index);
        else if (this.card_flipping[0][2] == 8)
            this.flip_x_back_card(index - 5);
        else
            if (index > 4)
                this.flip_y_card(this._cards_player_2_B, this._cards_player_2_A, index - 5);
            else
                this.flip_y_card(this._cards_player_1_A, this._cards_player_1_B, index);
    }
    else {
        if (this.card_flipping[0][2] == 0)
            if (index > 4)
                this.flip_x_card(this._cards_player_2_A, this._cards_player_2_B, index - 5);
            else
                this.flip_x_card(this._cards_player_1_B, this._cards_player_1_A, index);
        else
            if (index > 4)
                this.flip_y_card(this._cards_player_2_A, this._cards_player_2_B, index - 5);
            else
                this.flip_y_card(this._cards_player_1_B, this._cards_player_1_A, index);
    }
};


//-----------------------------------------------------------------------------
// Function : call_plus_same_combo_animation - calls plus same combo animation
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.input_plus_same_combo_animation = function (type) {
    this.call_plus_same_combo_animation.unshift([type, 0]);
    switch (type) {
        case 0:
            this._plusImage.x = parseInt(Graphics.width);
            this._plusImage.y = parseInt(Graphics.height) / 2;
            break;
        case 1:
            this._sameImage.x = parseInt(Graphics.width);
            this._sameImage.y = parseInt(Graphics.height) / 2;
            break;
        case 2:
            this._comboImage.x = parseInt(Graphics.width);
            this._comboImage.y = parseInt(Graphics.height) / 2;
            break;
    }
};

//-----------------------------------------------------------------------------
// Function : flip_x_card - flips cards horizontally
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.flip_x_back_card = function (index) {
    if (this._cards_player_2_A[index].scale.x > 0 && this.phase_flip == 0)
        this._cards_player_2_A[index].scale.x = Math.round((this._cards_player_2_A[index].scale.x - 0.1) * 10) / 10;
    else if (this.phase_flip == 0) {
        this._cards_player_2_C[index].scale.x = 0;
        this._cards_player_2_C[index].opacity = 255;
        this._cards_player_2_A[index] = this._cards_player_2_C[index];
        this.phase_flip = 1
    }
    else if (this._cards_player_2_A[index].scale.x < 1)
        this._cards_player_2_A[index].scale.x = Math.round((this._cards_player_2_A[index].scale.x + 0.1) * 10) / 10;
    else {
        this.phase_flip = 0;
        this.card_flipping.shift();
    }

};

//-----------------------------------------------------------------------------
// Function : flip_x_card - flips cards horizontally
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.flip_x_card = function (cardA, cardB, index) {

    if (this.phase_flip == 0) {
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y = 1;
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x = 0;
        cardB[index].scale.x = 0;
        cardB[index].scale.y = 1;
        cardB[index].opacity = 255;
        cardB[index].x = cardA[index].x;
        cardB[index].y = cardA[index].y;
        this.phase_flip = 1;
        AudioManager.playSe({ name: this.aux_images['card_flipping_sound'], pan: 0, pitch: 100, volume: 100 });
    }
    if (cardA[index].scale.x > 0) {
        cardA[index].scale.x = Math.round((cardA[index].scale.x - 0.1) * 10) / 10;
    }
    else if (this.phase_flip == 1 && this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x < 1) {
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x = Math.round((this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x + 0.1) * 10) / 10;
        if (this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x == 1)
            this.phase_flip = 2;
    }
    else if (this.phase_flip == 2 && this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x > 0)
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x = Math.round((this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x - 0.1) * 10) / 10;
    else if (cardB[index].scale.x < 1)
        cardB[index].scale.x = Math.round((cardB[index].scale.x + 0.1) * 10) / 10;
    else {
        this.phase_flip = 0;
        this.card_flipping.shift();
        this.player_turn == 0 ? this.score++ : this.score--;
        this.update_score_players();
    }
};

//-----------------------------------------------------------------------------
// Function : flip_y_card - flips cards horizontally
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.flip_y_card = function (cardA, cardB, index) {

    if (this.phase_flip == 0) {
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.x = 1;
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y = 0;
        cardB[index].scale.y = 0;
        cardB[index].scale.x = 1;
        cardB[index].opacity = 255;
        cardB[index].x = cardA[index].x;
        cardB[index].y = cardA[index].y;
        this.phase_flip = 1;
        AudioManager.playSe({ name: this.aux_images['card_flipping_sound'], pan: 0, pitch: 100, volume: 100 });
    }
    if (cardA[index].scale.y > 0) {
        cardA[index].scale.y = Math.round((cardA[index].scale.y - 0.1) * 10) / 10;
    }
    else if (this.phase_flip == 1 && this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y < 1) {
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y = Math.round((this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y + 0.1) * 10) / 10;
        if (this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y == 1)
            this.phase_flip = 2;
    }
    else if (this.phase_flip == 2 && this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y > 0)
        this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y = Math.round((this._cards_back_board_cards[this.card_flipping[0][0] * 3 + this.card_flipping[0][1]].scale.y - 0.1) * 10) / 10;
    else if (cardB[index].scale.y < 1)
        cardB[index].scale.y = Math.round((cardB[index].scale.y + 0.1) * 10) / 10;
    else {
        this.phase_flip = 0;
        this.card_flipping.shift();
        this.player_turn == 0 ? this.score++ : this.score--;
        this.update_score_players();
    }
};

//-----------------------------------------------------------------------------
// Function : is_flipping - checks if cards are flipping
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.is_flipping = function () {
    return this.card_flipping.length != 0;
};

//////////////////////////// PHASE 9 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : end_game - end game animations
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.end_game = function () {
    if (this.triple_triad_frame_count < 10)
        this._endGameImage.scale.y = Math.round((this._endGameImage.scale.y + 0.1) * 10) / 10;
    if (this.triple_triad_frame_count >= 30) {
        if (Input.isTriggered('ok') || TouchInput.isTriggered()) {
            $dataTripleTriad.board_state = [[], []];
            for (var x = 0; x < 3; x++)
                for (var y = 0; y < 3; y++) {
                    if (this.board_card_values[x][y][4] == 0)
                        $dataTripleTriad.board_state[0].push(this.board_state[x][y]);
                    else
                        $dataTripleTriad.board_state[1].push(this.board_state[x][y]);
                };

            if (this.score == 5 && this.suddenDeath) {
                var get_cards_flip = $dataTripleTriad.board_state;
                var copy_npc_cards_hand = JSON.parse(JSON.stringify(this.npc_cards_hand));
                var copy_player_cards_hand = JSON.parse(JSON.stringify(this.player_cards_hand));
                for (var card = 0; card < get_cards_flip[0].length; card++) {
                    if (get_cards_flip[0][card] > 4) {
                        this.remove_specific_item(this.npc_cards_hand, copy_npc_cards_hand[get_cards_flip[0][card] - 5]);
                        this.player_cards_hand.push(copy_npc_cards_hand[get_cards_flip[0][card] - 5]);
                    };
                };
                for (var card = 0; card < get_cards_flip[1].length; card++) {
                    if (get_cards_flip[1][card] <= 4) {
                        this.remove_specific_item(this.player_cards_hand, copy_player_cards_hand[get_cards_flip[1][card]]);
                        this.npc_cards_hand.push(copy_player_cards_hand[get_cards_flip[1][card]]);
                    };

                };
                this.load_plugin_parameters();
                // this.initialize_enemy_variables();
                this.initialize_variables(true);
                this.initialize.apply(this, arguments);
                this.createWindowLayer();
                this.initialize_rules_windows();

            }
            else if (this.score == 5 && $dataTripleTriad.currentRule != 2) {
                $dataTripleTriad.score = this.score;
                SceneManager.goto(Scene_Map);
            }
            else {
                $dataTripleTriad.score = this.score;
                SceneManager.push(Scene_After_Match_TT);
            };


        };
    };
};

//////////////////////////////// AUX FUNCTIONS ////////////////////////////////////

//-----------------------------------------------------------------------------
// Function : remove_specific_item - removes specific card from array
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.remove_specific_item = function (arr, card) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === card) {
            arr.splice(i, 1);
            return;
        }
    }
};

//-----------------------------------------------------------------------------
// Function : update_score_players - updates the game score
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.update_score_players = function () {
    for (var i = 0; i < 9; i++) {
        this._score_player_Images[i].opacity = 0;
        this._score_enemy_Images[i].opacity = 0;
    }
    this._score_player_Images[this.score - 1].opacity = 255;
    this._score_enemy_Images[9 - this.score].opacity = 255;
};

//-----------------------------------------------------------------------------
// Function : move_cursor - move_cursor animation
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.is_cursor_moving = function () {
    return (parseInt(this.cursor_end_position[0]) + this.cursor_correction_x == parseInt(this._game_cursor.x) && parseInt(this.cursor_end_position[1]) + this.cursor_correction_y == parseInt(this._game_cursor.y));
};

//-----------------------------------------------------------------------------
// Function : set_cursor_end_position - sets the final position of the cursor
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.set_cursor_end_position = function (x, y) {
    this.triple_triad_frame_count = 0;
    this.cursor_end_position = [parseInt(x) - parseInt(this._cards_player_1_A[0].width) + parseInt(this.aux_images['main_cursor_x']), parseInt(y) - parseInt(this._cards_player_1_A[0].height) + parseInt(this.aux_images['main_cursor_y'])];
    this.cursor_start_position = [this._game_cursor.x, this._game_cursor.y];
};

//-----------------------------------------------------------------------------
// Function : has_card_on_board - checks if card is on the board
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.has_card_on_board = function (i) {
    return (this.board_state[0].includes(i) || this.board_state[1].includes(i) || this.board_state[2].includes(i));
};
//-----------------------------------------------------------------------------
// Function : board_is_full - checks if board is complete
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.board_is_full = function () {
    return !(this.board_state[0].includes(-1) || this.board_state[1].includes(-1) || this.board_state[2].includes(-1));
};
///////////////////////////////////////////////////////////////////////////
///////////////////////// ARTIFICIAL INTELIGENCE //////////////////////////
///////////////////////////////////////////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : choose_best_npc_play - chooses best npc play
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.choose_best_npc_play = function () {
    var best_play = new Array();
    for (var i = 5; i < 10; i++) {
        if (this.has_card_on_board(i))
            continue;
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                if (this.board_state[x][y] != -1)
                    continue;
                best_play.push(this.get_ai_play_value(i, x, y));
            }
        }

    }
    var max_value = 0;
    var best_play_choice = new Array();
    for (var i = 0; i < best_play.length; i++) {
        if (best_play[i][3] > max_value) {
            max_value = best_play[i][3];
            best_play_choice = best_play[i];
        }
    }
    this.enemy_index = best_play_choice[0];
    this.board_index = [best_play_choice[1], best_play_choice[2]];
    //Math.floor(Math.random() * 5);
};

//-----------------------------------------------------------------------------
// Function : get_ai_play_value - pushes every play
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.get_ai_play_value = function (index, x, y) {
    var up = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[index - 5]])["Power(UP)"]);
    var left = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[index - 5]])["Power(LEFT)"]);
    var right = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[index - 5]])["Power(RIGHT)"]);
    var down = parseInt(JSON.parse(this.card_list[this.npc_cards_hand[index - 5]])["Power(DOWN)"]);
    var reducer = 0;
    var play_value = 80;
    this.board_card_values_ai = JSON.parse(JSON.stringify(this.board_card_values));
    this.board_card_values_ai[x][y] = [up, left, right, down, 1];
    this.score_ia = this.score;
    this.card_flipping_ia = new Array();
    if (this.enemy_dificulty == 0)
        play_value = Math.floor(Math.random() * 50);
    if (this.enemy_dificulty > 1) {
        if (this.plusRule)
            this.check_plus_flip_condition_ai(x, y);
        if (this.sameRule)
            this.check_same_flip_condition_ai(x, y);
    }
    if (this.enemy_dificulty > 2 && this.comboRule)
        this.check_combo_flip_condition_ai();
    if (this.enemy_dificulty > 0) {
        this.check_normal_flip_condition_ai(x - 1, y, x, y);
        this.check_normal_flip_condition_ai(x + 1, y, x, y);
        this.check_normal_flip_condition_ai(x, y - 1, x, y);
        this.check_normal_flip_condition_ai(x, y + 1, x, y);
    }
    if (this.enemy_dificulty == 3)
        play_value += this.check_open_corners(up, left, right, down, x, y);
    if (this.enemy_dificulty == 4)
        reducer = up + left + right + down - this.check_open_corners(up, left, right, down, x, y) / 5;

    play_value = play_value + (this.score_ia - this.score) * 40 - reducer;

    return [index, x, y, play_value];

};

//-----------------------------------------------------------------------------
// Function : check_plus_flip_condition_ai - checks the plus flip conditions for artificial Inteligence
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_open_corners = function (up, left, right, down, x, y) {
    var count = 40;
    if (x - 1 >= 0 && this.board_card_values_ai[x - 1][y] == false)
        count = count - (10 - left);
    if (x + 1 <= 2 && this.board_card_values_ai[x + 1][y] == false)
        count = count - (10 - right);
    if (y - 1 >= 0 && this.board_card_values_ai[x][y - 1] == false)
        count = count - (10 - up);
    if (y + 2 >= 0 && this.board_card_values_ai[x][y + 1] == false)
        count = count - (10 - down);
    return count;
};

//-----------------------------------------------------------------------------
// Function : check_plus_flip_condition_ai - checks the plus flip conditions for artificial Inteligence
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_plus_flip_condition_ai = function (x, y) {
    var sum = new Array();
    var sum_num = new Array();
    if (x + 1 <= 2 && this.board_card_values_ai[x + 1][y] != false) {
        sum.push([x + 1, y, this.board_card_values_ai[x][y][2] + this.board_card_values_ai[x + 1][y][1], 2]);
        sum_num.push(this.board_card_values_ai[x][y][2] + this.board_card_values_ai[x + 1][y][1]);
    }
    if (x - 1 >= 0 && this.board_card_values_ai[x - 1][y] != false) {
        sum.push([x - 1, y, this.board_card_values_ai[x][y][1] + this.board_card_values_ai[x - 1][y][2], 2]);
        sum_num.push(this.board_card_values_ai[x][y][1] + this.board_card_values_ai[x - 1][y][2]);
    }
    if (y + 1 <= 2 && this.board_card_values_ai[x][y + 1] != false) {
        sum.push([x, y + 1, this.board_card_values_ai[x][y][3] + this.board_card_values_ai[x][y + 1][0], 3]);
        sum_num.push(this.board_card_values_ai[x][y][3] + this.board_card_values_ai[x][y + 1][0]);
    }
    if (y - 1 >= 0 && this.board_card_values_ai[x][y - 1] != false) {
        sum.push([x, y - 1, this.board_card_values_ai[x][y][0] + this.board_card_values_ai[x][y - 1][3], 3]);
        sum_num.push(this.board_card_values_ai[x][y][0] + this.board_card_values_ai[x][y - 1][3]);
    }
    if (this.plusWall) {
        if (x + 1 == 3)
            sum_num.push(this.board_card_values_ai[x][y][2] + 10);
        if (x - 1 == -1)
            sum_num.push(this.board_card_values_ai[x][y][1] + 10);
        if (y + 1 == 3)
            sum_num.push(this.board_card_values_ai[x][y][3] + 10);
        if (y - 1 == -1)
            sum_num.push(this.board_card_values_ai[x][y][0] + 10);
    }


    for (var i = 0; i < sum.length; i++) {
        if (this.board_card_values_ai[sum[i][0]][sum[i][1]][4] == this.player_turn)
            continue;
        if (sum_num.count(sum[i][2]) >= 2) {
            this.card_flipping_ia.unshift([sum[i][0], sum[i][1], sum[i][3]]);
            this.board_card_values_ai[sum[i][0]][sum[i][1]][4] = this.player_turn;
            this.score_ia++;
        }

    }

};

//-----------------------------------------------------------------------------
// Function : check_same_flip_condition_ai - checks the same flip conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_same_flip_condition_ai = function (x, y) {
    var same = new Array();
    var same_num = new Array();
    if (x + 1 <= 2 && this.board_card_values_ai[x + 1][y] != false) {
        same.push([x + 1, y, this.board_card_values_ai[x][y][2] == this.board_card_values_ai[x + 1][y][1], 4]);
        same_num.push(this.board_card_values_ai[x][y][2] == this.board_card_values_ai[x + 1][y][1]);
    }
    if (x - 1 >= 0 && this.board_card_values_ai[x - 1][y] != false) {
        same.push([x - 1, y, this.board_card_values_ai[x][y][1] == this.board_card_values_ai[x - 1][y][2], 4]);
        same_num.push(this.board_card_values_ai[x][y][1] == this.board_card_values_ai[x - 1][y][2]);
    }
    if (y + 1 <= 2 && this.board_card_values_ai[x][y + 1] != false) {
        same.push([x, y + 1, this.board_card_values_ai[x][y][3] == this.board_card_values_ai[x][y + 1][0], 5]);
        same_num.push(this.board_card_values_ai[x][y][3] == this.board_card_values_ai[x][y + 1][0]);
    }
    if (y - 1 >= 0 && this.board_card_values_ai[x][y - 1] != false) {
        same.push([x, y - 1, this.board_card_values_ai[x][y][0] == this.board_card_values_ai[x][y - 1][3], 5]);
        same_num.push(this.board_card_values_ai[x][y][0] == this.board_card_values_ai[x][y - 1][3]);
    }
    if (this.sameWall) {
        if (x + 1 == 3)
            same_num.push(this.board_card_values_ai[x][y][2] == 10);
        if (x - 1 == -1)
            same_num.push(this.board_card_values_ai[x][y][1] == 10);
        if (y + 1 == 3)
            same_num.push(this.board_card_values_ai[x][y][3] == 10);
        if (y - 1 == -1)
            same_num.push(this.board_card_values_ai[x][y][0] == 10);
    }

    for (var i = 0; i < same.length; i++) {
        if (this.board_card_values_ai[same[i][0]][same[i][1]][4] == this.player_turn)
            continue;
        if (same_num.count(true) >= 2 && same[i][2] == true) {
            this.card_flipping_ia.unshift([same[i][0], same[i][1], same[i][3]]);
            this.board_card_values_ai[same[i][0]][same[i][1]][4] = this.player_turn;
            this.score_ia++;
        }

    }

};

//-----------------------------------------------------------------------------
// Function : check_normal_flip_condition_ai - checks the normal flip conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_normal_flip_condition_ai = function (x, y, self_card_x, self_card_y, combo = 0) {
    if (x < 0 || x > 2 || y < 0 || y > 2)
        return;
    if (this.board_card_values_ai[x][y] == false)
        return;
    if (this.board_card_values_ai[x][y][4] == this.player_turn)
        return;
    if (x < self_card_x)
        if (this.board_card_values_ai[x][y][2] < this.board_card_values_ai[x + 1][y][1]) {
            this.card_flipping_ia.push([x, y, 0 + combo]);
            this.score_ia++;
            this.board_card_values_ai[x][y][4] = this.player_turn;
        }
    if (x > self_card_x)
        if (this.board_card_values_ai[x][y][1] < this.board_card_values_ai[x - 1][y][2]) {
            this.card_flipping_ia.push([x, y, 0 + combo]);
            this.score_ia++;
            this.board_card_values_ai[x][y][4] = this.player_turn;
        }
    if (y < self_card_y)
        if (this.board_card_values_ai[x][y][3] < this.board_card_values_ai[x][y + 1][0]) {
            this.card_flipping_ia.push([x, y, 1 + combo]);
            this.score_ia++;
            this.board_card_values_ai[x][y][4] = this.player_turn;
        }
    if (y > self_card_y)
        if (this.board_card_values_ai[x][y][0] < this.board_card_values_ai[x][y - 1][3]) {
            this.card_flipping_ia.push([x, y, 1 + combo]);
            this.score_ia++;
            this.board_card_values_ai[x][y][4] = this.player_turn;
        }
};

//-----------------------------------------------------------------------------
// Function : check_combo_flip_condition_ai - checks the combo flip conditions
//-----------------------------------------------------------------------------
Scene_TripleTriad.prototype.check_combo_flip_condition_ai = function (x, y) {
    for (var i = 0; i < this.card_flipping_ia.length; i++) {
        this.check_normal_flip_condition_ai(this.card_flipping_ia[i][0] - 1, this.card_flipping_ia[i][1], this.card_flipping_ia[i][0], this.card_flipping_ia[i][1], 6);
        this.check_normal_flip_condition_ai(this.card_flipping_ia[i][0] + 1, this.card_flipping_ia[i][1], this.card_flipping_ia[i][0], this.card_flipping_ia[i][1], 6);
        this.check_normal_flip_condition_ai(this.card_flipping_ia[i][0], this.card_flipping_ia[i][1] - 1, this.card_flipping_ia[i][0], this.card_flipping_ia[i][1], 6);
        this.check_normal_flip_condition_ai(this.card_flipping_ia[i][0], this.card_flipping_ia[i][1] + 1, this.card_flipping_ia[i][0], this.card_flipping_ia[i][1], 6);
    }
};

//-----------------------------------------------------------------------------
// Triple Triad Image Handler
//
// The scene class of the battle screen.

ImageManager.loadTripleTriad = function (filename, hue) {
    return this.loadBitmap('img/Triple_Triad/', filename, hue, true);
};


function Window_TripleTriad_Rules() {
    this.initialize.apply(this, arguments);
}

Window_TripleTriad_Rules.prototype = Object.create(Window_Base.prototype);
Window_TripleTriad_Rules.prototype.constructor = Window_TripleTriad_Rules;

Window_TripleTriad_Rules.prototype.initialize = function (x, y) {
    var width = 300;
    var height = 250;
    Window_Base.prototype.initialize.call(this, new Rectangle(x, y, width, height));
    this.write_rules();
};


Window_TripleTriad_Rules.prototype.write_rules = function () {
    this.enemy_configuration = JSON.parse(PluginManager.parameters('tripleTriad')['Enemy Creation']);
    this.card_list = JSON.parse(PluginManager.parameters('tripleTriad')['Rules']);



    var yes = this.card_list['Yes'];
    var no = this.card_list['No'];
    this.contents.fontSize = 30;
    this.drawText(this.card_list["Rules"], -20, 0, this.width, 'center');
    this.contents.fontSize = 24;
    this.drawText(this.card_list["Plus"], 0, this.lineHeight());
    this.drawText(this.card_list["Same"], 0, this.lineHeight() * 2);
    this.drawText(this.card_list["Combo"], 0, this.lineHeight() * 3);
    this.drawText(this.card_list["PlusWall"], 0, this.lineHeight() * 4);
    this.drawText(this.card_list["SameWall"], 0, this.lineHeight() * 5);
    if (JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['Plus'] == "true")
        this.drawText(yes, 0, this.lineHeight(), this.width - 50, 'right');
    else
        this.drawText(no, 0, this.lineHeight(), this.width - 50, 'right');
    if (JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['Same'] == "true")
        this.drawText(yes, 0, this.lineHeight() * 2, this.width - 50, 'right');
    else
        this.drawText(no, 0, this.lineHeight() * 2, this.width - 50, 'right');
    if (JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['Combo'] == "true")
        this.drawText(yes, 0, this.lineHeight() * 3, this.width - 50, 'right');
    else
        this.drawText(no, 0, this.lineHeight() * 3, this.width - 50, 'right');
    if (JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['PlusWall'] == "true")
        this.drawText(yes, 0, this.lineHeight() * 4, this.width - 50, 'right');
    else
        this.drawText(no, 0, this.lineHeight() * 4, this.width - 50, 'right');
    if (JSON.parse(this.enemy_configuration[$dataTripleTriad.enemy_id])['SameWall'] == "true")
        this.drawText(yes, 0, this.lineHeight() * 5, this.width - 50, 'right');
    else
        this.drawText(no, 0, this.lineHeight() * 5, this.width - 50, 'right');
    this.contents.fontSize = 28;
    this.drawText(this.card_list["WinCon"], -20, this.lineHeight() * 7, this.width, 'center');
    this.contents.fontSize = 14;
    console.log(this.card_list["Direct"]);
    switch ($dataTripleTriad.currentRule) {
        case 0:
        case 1:
            this.drawTextEx(JSON.parse(this.card_list["One"]), 0, this.lineHeight() * 9);
            break;
        case 2:
            this.drawTextEx(JSON.parse(this.card_list["Direct"]), 0, this.lineHeight() * 9);
            break;
        case 3:
            this.drawTextEx(JSON.parse(this.card_list["All"]), 0, this.lineHeight() * 9);
            break;
    }


};

Object.defineProperties(Array.prototype, {
    count: {
        value: function (query) {
            /* 
               Counts number of occurrences of query in array, an integer >= 0 
               Uses the javascript == notion of equality.
            */
            var count = 0;
            for (let i = 0; i < this.length; i++)
                if (this[i] == query)
                    count++;
            return count;
        }
    }
});






//-----------------------------------------------------------------------------
// Sprite_Cards
//
// The sprite for displaying a card in triple triad.

function Sprite_Card() {
    this.initialize.apply(this, arguments);
}

Sprite_Card.prototype = Object.create(Sprite.prototype);
Sprite_Card.prototype.constructor = Sprite_Card;

Sprite_Card.prototype.initialize = function () {
    Sprite.prototype.initialize.call(this);
    this._touching = false;
    this._coldFrame = null;
    this._hotFrame = null;
    this._clickHandler = null;
};

Sprite_Card.prototype.update = function () {
    Sprite.prototype.update.call(this);
    this.updateFrame();
    this.processTouch();
};

Sprite_Card.prototype.updateFrame = function () {
    var frame;
    if (this._touching) {
        frame = this._hotFrame;
    } else {
        frame = this._coldFrame;
    }
    if (frame) {
        this.setFrame(frame.x, frame.y, frame.width, frame.height);
    }
};

Sprite_Card.prototype.setColdFrame = function (x, y, width, height) {
    this._coldFrame = new Rectangle(x, y, width, height);
};

Sprite_Card.prototype.setHotFrame = function (x, y, width, height) {
    this._hotFrame = new Rectangle(x, y, width, height);
};

Sprite_Card.prototype.setClickHandler = function (method) {
    this._clickHandler = method;
};

Sprite_Card.prototype.callClickHandler = function () {
    if (this._clickHandler) {
        this._clickHandler();
    }
};

Sprite_Card.prototype.processTouch = function () {
    if (this.isActive()) {
        if (TouchInput.isTriggered() && this.isButtonTouched()) {
            this._touching = true;
        }
        if (this._touching) {
            if (TouchInput.isReleased() || !this.isButtonTouched()) {
                this._touching = false;
                if (TouchInput.isReleased()) {
                    this.callClickHandler();
                }
            }
        }
    } else {
        this._touching = false;
    }
};

Sprite_Card.prototype.isActive = function () {
    var node = this;
    while (node) {
        if (!node.visible) {
            return false;
        }
        node = node.parent;
    }
    return true;
};

Sprite_Card.prototype.isButtonTouched = function () {
    var x = this.canvasToLocalX(TouchInput.x + this.width / 2);
    var y = this.canvasToLocalY(TouchInput.y + this.height / 2);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Sprite_Card.prototype.canvasToLocalX = function (x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

Sprite_Card.prototype.canvasToLocalY = function (y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};




//-----------------------------------------------------------------------------
// Scene_After_Triple_Triad
//
// The sprite for displaying a card in triple triad.

function Scene_After_Match_TT() {
    this.load_plugin_parameters();
    this.load_variables();
    this.initialize.apply(this, arguments);
    this.createWindowLayer()
    this.initialize_afterMatch_windows();
}

Scene_After_Match_TT.prototype = Object.create(Scene_Base.prototype);
Scene_After_Match_TT.prototype.constructor = Scene_After_Match_TT;

//-----------------------------------------------------------------------------
// Function : load_variables - loads variables
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.load_variables = function () {
    this.player_cards_hand = $dataTripleTriad.self_tt_cards;
    this.npc_cards_hand = JSON.parse(JSON.stringify($dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id]));
    if (this.npc_cards_hand.length > 5) {
        var max = this.npc_cards_hand.length;
        for (var c = 5; c < max; c++) {
            this.npc_cards_hand.pop();
        };
    }
    this.phase = 0;
    this.cursor_correction_x = parseInt(this.aux_images['main_cursor_x']);
    this.cursor_correction_y = parseInt(this.aux_images['main_cursor_y']);
    this.cursor_end_position = [0, 0];
    this.cursor_start_position = [0, 0];
    this.card_flipping = new Array();
    this.index = 0;
    this.phase_flip = 0;
    this.win_case = $dataTripleTriad.currentRule;
    this.enemy_phase = 0;
    this.score = $dataTripleTriad.score;
    if (this.score < 5 && this.win_case == 0)
        this.win_case = 1;

}
//-----------------------------------------------------------------------------
// Function : load_plugin_parameters - initiates the triple triad variables
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.load_plugin_parameters = function () {
    this.image_list = JSON.parse(PluginManager.parameters('tripleTriad')['After Match']);
    this.card_list = JSON.parse(PluginManager.parameters('tripleTriad')['Card Creation']);
    this.aux_images = JSON.parse(PluginManager.parameters('tripleTriad')['Image Configuration']);
}
//-----------------------------------------------------------------------------
// Function : initialize - initiates the graphics
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.initialize = function () {
    Scene_Base.prototype.initialize.call(this);
    this.create_background();
    this.create_cards();
    this.create_cursor();

};

Scene_After_Match_TT.prototype.create_cursor = function () {
    this._game_cursor = new Sprite();
    this._game_cursor.bitmap = ImageManager.loadTripleTriad(this.aux_images['main_cursor']);
    this._game_cursor.opacity = 0;
    this.addChild(this._game_cursor);
};
//-----------------------------------------------------------------------------
// Function : initialize_afterMatch_windows - initiates the afterMatch Window
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.initialize_afterMatch_windows = function () {
    this._rulesWindow = new Window_TripleTriad_AfterMatch(Graphics.boxWidth / 2 - 250, 20, 500, 110);
    switch (this.win_case) {
        case 0:
        case 1:
            this._rulesWindow.drawTextEx("One - Winners pick! use directional keys to choose", 0, 0);
            break;
        case 2:
            this._rulesWindow.drawTextEx("Direct - \nEach player gets its cards color!", 0, 0);
            break;
        case 3:
            this._rulesWindow.drawTextEx("All - Winner wins it all!!", 0, 0);
            break;
    }
    this.addWindow(this._rulesWindow);
    this._rulesWindow.opacity = 0;
    this._rulesWindow.close();

    this._confirmWindow = new Window_TripleTriad_AfterMatch_Confirmation(Graphics.boxWidth / 2 - 50, 320, 100, 110);


    this.addWindow(this._confirmWindow);
    this._confirmWindow.opacity = 0;
    this._confirmWindow.close();

}
//-----------------------------------------------------------------------------
// Function : create_background - creates background Images
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.create_background = function () {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = ImageManager.loadTripleTriad(this.image_list['AfterGameBackground']);
    this.addChild(this._backSprite);
};

//-----------------------------------------------------------------------------
// Function : create_cards - creates Card Images Images
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.create_cards = function () {
    this._cards_player_1_A = new Array(5);
    this._cards_player_2_A = new Array(5);
    this._cards_player_1_B = new Array(5);
    this._cards_player_2_B = new Array(5);
    for (var i = 0; i < 5; i++) {
        this.add_single_card_image(this._cards_player_1_A, i, 1);
        this.add_single_card_image(this._cards_player_2_A, i, 2);
        this.add_single_card_image(this._cards_player_2_B, i, 3);
        this.add_single_card_image(this._cards_player_1_B, i, 4);
    }
};

//-----------------------------------------------------------------------------
// Function : add_single_card_image - creates card single image
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.add_single_card_image = function (card_pointer, index, type) {
    card_pointer[index] = new Sprite_Card();
    switch (type) {
        case 1:
            card_name = JSON.parse(this.card_list[this.player_cards_hand[index]])["Image_Player_1"];
            card_pointer[index].x = parseInt(this.image_list["Player_1_X"]);
            card_pointer[index].y = parseInt(this.image_list["Player_1_Y"]);
            break;
        case 2:
            card_name = JSON.parse(this.card_list[this.npc_cards_hand[index]])["Image_Player_2"];
            card_pointer[index].x = parseInt(this.image_list["Player_2_X"]);
            card_pointer[index].y = parseInt(this.image_list["Player_2_Y"]);
            break;
        case 3:
            card_name = JSON.parse(this.card_list[this.npc_cards_hand[index]])["Image_Player_1"];
            card_pointer[index].x = parseInt(this.image_list["Player_1_X"]);
            card_pointer[index].y = parseInt(this.image_list["Player_1_Y"]);
            break;
        case 4:
            card_name = JSON.parse(this.card_list[this.player_cards_hand[index]])["Image_Player_2"];
            card_pointer[index].x = parseInt(this.image_list["Player_2_X"]);
            card_pointer[index].y = parseInt(this.image_list["Player_2_Y"]);
            break;

    }
    card_pointer[index].bitmap = ImageManager.loadTripleTriad(card_name);
    card_pointer[index].opacity = 0;
    this.addChild(card_pointer[index]);
    card_pointer[index].anchor.x = 0.5;
    card_pointer[index].anchor.y = 0.5;
};



//-----------------------------------------------------------------------------
// Function : update - Updates process
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.update = function () {
    Scene_Base.prototype.update.call(this);
    this.triple_triad_frame_count++;
    this.move_cursor();
    switch (this.phase) {
        case 0:
            this.update_opacity();
            break;
        case 1:
            this.move_cards();
            break;
        case 2:
            this.choose_card();
            break;
        case 3:
            this.confirm_flip();
            break;
        case 4:
            this.flip_all_cards();
            break;
        case 5:
            this.wait_for_click();
            break;
        case 6:
            this.close_scene();
            break;
    }

}
//-----------------------------------------------------------------------------
// Function : wait_for_click - waits for click
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.wait_for_click = function () {
    if (Input.isTriggered('ok') || TouchInput.isTriggered()) {
        this._rulesWindow.close();
        SoundManager.playOk();
        this.phase = 6;
    }
};
//-----------------------------------------------------------------------------
// Function : close_scene - confirms flip
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.close_scene = function () {
    if (this._backSprite.opacity > 0) {
        this._backSprite.opacity -= 10;
        for (var i = 0; i < 5; i++) {
            this._cards_player_1_A[i].opacity -= 10;
            this._cards_player_1_B[i].opacity -= 10;
            this._cards_player_2_A[i].opacity -= 10;
            this._cards_player_2_B[i].opacity -= 10;
        }
        this._game_cursor.opacity -= 10;
    }
    else {
        SceneManager.goto(Scene_Map);
    }

};

//-----------------------------------------------------------------------------
// Function : confirm_flip - confirms flip
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.confirm_flip = function () {
    if (this._confirmWindow.isClosed()) {
        if (this._confirmWindow.index() == 0) {
            this.phase = 4;
            console.log(this.index);
            $dataTripleTriad.all_cards.push($dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id][this.index]);
            $dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].splice(this.index, 1)
            this.card_flipping.push(this.index + 5);
        }
        if (this._confirmWindow.index() == 1) {
            this.phase = 2;
        }
    }
};
//////////////////////////// PHASE 0 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : update_opacity - updates initial opacity
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.update_opacity = function () {
    if (this._backSprite.opacity < 255)
        this._backSprite.opacity += 5;
    else if (this._cards_player_1_A[1].opacity < 255) {
        this._cards_player_1_A.forEach(this.change_opacity);
        this._cards_player_2_A.forEach(this.change_opacity);
    }
    else {
        this.get_distance = parseInt(this.image_list["Distance_Cards"]);
        this.get_distance /= 30;
        AudioManager.playSe({ name: this.aux_images['card_shuffle_sound'], pan: 0, pitch: 100, volume: 100 });
        this.phase = 1;
        this._rulesWindow.opacity = 255;
        this._confirmWindow.opacity = 255;
        this.triple_triad_frame_count = 0;
    }
};
//-----------------------------------------------------------------------------
// Function : change_opacity - updates current opacity
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.change_opacity = function (element, index, array) {
    element.opacity += 5;
};


//////////////////////////// PHASE 1 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : move_cards - moves cards
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.move_cards = function (y) {
    if (this.triple_triad_frame_count <= 30)
        for (var i = 0; i < 5; i++) {
            this._cards_player_1_A[i].x += this.get_distance * i;
            this._cards_player_2_A[i].x += this.get_distance * i;
        }
    else {


        if (this.win_case == 0) {
            this._game_cursor.opacity = 255;
            this.set_cursor_end_position(this._cards_player_1_B[0].x, this._cards_player_1_B[0].y);
            this._rulesWindow.open();
        }

        if (this.win_case == 1) {
            this._game_cursor.opacity = 255;
            this.set_cursor_end_position(this._cards_player_1_B[0].x, this._cards_player_1_B[0].y);
            this._rulesWindow.open();
            this.triple_triad_frame_count = 0;
        }
        if (this.win_case >= 2) {
            this._rulesWindow.open();
            this.triple_triad_frame_count = 0;
        }
        this.phase = 2;
    }

};

//////////////////////////// PHASE 2 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : choose_card - choose card
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.choose_card = function () {
    if (!this.is_cursor_moving())
        return;
    if (this.win_case == 0) {
        if (Input.isRepeated('left')) {
            SoundManager.playCursor();
            this.update_player_card_index(-1);
        }
        if (Input.isRepeated('right')) {
            SoundManager.playCursor();
            this.update_player_card_index(1);
        }
        if (Input.isTriggered('ok')) {
            this._confirmWindow.open();
            this.phase = 3;
        }
    }
    if (this.win_case == 1) {
        if (this.enemy_phase == 1)
            this.phase = 4;
        if (this.triple_triad_frame_count == 60) {
            var randNum = Math.floor(Math.random() * 5);
            this.card_flipping.push(randNum);
            this.set_cursor_end_position(this._cards_player_1_A[randNum].x, this._cards_player_1_A[randNum].y);
            $dataTripleTriad.self_tt_cards.splice(randNum, 1)
            this.enemy_phase = 1;
        }
    }

    if (this.win_case == 2) {
        if (this.triple_triad_frame_count == 60) {
            var card_num = 0;
            var get_cards_flip = $dataTripleTriad.board_state;
            for (var card = 0; card < get_cards_flip[0].length; card++) {
                if (get_cards_flip[0][card] > 4)
                    this.card_flipping.push(get_cards_flip[0][card]);
            }
            card_num = 0;
            for (var card = 0; card < get_cards_flip[1].length; card++) {
                if (get_cards_flip[1][card] <= 4)
                    this.card_flipping.push(get_cards_flip[1][card]);

            }
            var copy_player_cards_hand = JSON.parse(JSON.stringify($dataTripleTriad.self_tt_cards));
            var copy_npc_cards_hand = JSON.parse(JSON.stringify($dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id]));
            for (var card = 0; card < get_cards_flip[0].length; card++) {
                if (get_cards_flip[0][card] > 4) {
                    this.remove_specific_item($dataTripleTriad.enemy_tt_cards, copy_npc_cards_hand[get_cards_flip[0][card] - 5]);
                    $dataTripleTriad.all_cards.push(copy_npc_cards_hand[get_cards_flip[0][card] - 5]);
                };
            };
            for (var card = 0; card < get_cards_flip[1].length; card++) {
                if (get_cards_flip[1][card] <= 4) {
                    this.remove_specific_item($dataTripleTriad.self_tt_cards, copy_player_cards_hand[get_cards_flip[1][card]]);
                    $dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].push(copy_player_cards_hand[get_cards_flip[1][card]]);
                };

            };
            this.phase = 4;
        }
    }
    if (this.win_case == 3) {
        if (this.triple_triad_frame_count == 60) {
            if (this.score > 5) {
                for (var n = 0; n < 5; n++)
                    $dataTripleTriad.all_cards.push($dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].shift());
                this.card_flipping.push(5, 6, 7, 8, 9);
            }
            else {
                for (var n = 0; n < 5; n++)
                    $dataTripleTriad.enemy_tt_cards[$dataTripleTriad.enemy_id].push($dataTripleTriad.self_tt_cards.shift());
                this.card_flipping.push(0, 1, 2, 3, 4);
            }
            this.phase = 4;
        }
    }
};

//-----------------------------------------------------------------------------
// Function : update_player_card_index - updates index
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.update_player_card_index = function (ind) {
    this.index += ind;
    if (this.index == -1)
        this.index = 4;
    if (this.index == 5)
        this.index = 0;
    this.set_cursor_end_position(this._cards_player_2_A[this.index].x, this._cards_player_2_A[this.index].y);
};

//////////////////////////// PHASE 3 //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : flip_all_cards - flips all cards
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.flip_all_cards = function () {
    if (this.card_flipping.length != 0)
        if (this.card_flipping[0] >= 5)
            this.flip_x_card(this._cards_player_2_A, this._cards_player_2_B, this.card_flipping[0] - 5);
        else
            this.flip_x_card(this._cards_player_1_A, this._cards_player_1_B, this.card_flipping[0]);
    else {

        this.phase = 5;
    }

};


//////////////////////////// AUX FUNCTIONS //////////////////////////////////////
//-----------------------------------------------------------------------------
// Function : move_cursor - move_cursor animation
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.move_cursor = function () {
    if (this.is_cursor_moving())
        return;
    else {
        if (this.triple_triad_frame_count >= 15) {
            this._game_cursor.x = this.cursor_end_position[0] + this.cursor_correction_x;
            this._game_cursor.y = this.cursor_end_position[1] + this.cursor_correction_y;
        }
        else {
            var x = this.cursor_end_position[0] - this.cursor_start_position[0] + this.cursor_correction_x;
            var y = this.cursor_end_position[1] - this.cursor_start_position[1] + this.cursor_correction_y;
            this._game_cursor.x += parseInt(x / 15);
            this._game_cursor.y += parseInt(y / 15);
        }
    }
};
//-----------------------------------------------------------------------------
// Function : move_cursor - move_cursor animation
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.is_cursor_moving = function () {
    return (parseInt(this.cursor_end_position[0]) + this.cursor_correction_x == parseInt(this._game_cursor.x) && parseInt(this.cursor_end_position[1]) + this.cursor_correction_y == parseInt(this._game_cursor.y));
};

//-----------------------------------------------------------------------------
// Function : set_cursor_end_position - sets the final position of the cursor
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.set_cursor_end_position = function (x, y) {
    this.triple_triad_frame_count = 0;
    this.cursor_end_position = [parseInt(x) - parseInt(this._cards_player_1_A[0].width) + parseInt(this.aux_images['main_cursor_x']), parseInt(y) - parseInt(this._cards_player_1_A[0].height) + parseInt(this.aux_images['main_cursor_y'])];
    this.cursor_start_position = [this._game_cursor.x, this._game_cursor.y];
};

//-----------------------------------------------------------------------------
// Function : flip_x_card - flips cards horizontally
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.flip_x_card = function (cardA, cardB, index) {

    if (this.phase_flip == 0) {
        cardB[index].scale.x = 0;
        cardB[index].scale.y = 1;
        cardB[index].opacity = 255;
        cardB[index].x = cardA[index].x;
        cardB[index].y = cardA[index].y;
        this.phase_flip = 1;
        AudioManager.playSe({ name: this.aux_images['card_flipping_sound'], pan: 0, pitch: 100, volume: 100 });
    }
    if (cardA[index].scale.x > 0) {
        cardA[index].scale.x = Math.round((cardA[index].scale.x - 0.1) * 10) / 10;
    }
    else if (cardB[index].scale.x < 1)
        cardB[index].scale.x = Math.round((cardB[index].scale.x + 0.1) * 10) / 10;
    else {
        this.phase_flip = 0;
        this.card_flipping.shift();
    }
};
//-----------------------------------------------------------------------------
// Function : remove_specific_item - removes specific card from array
//-----------------------------------------------------------------------------
Scene_After_Match_TT.prototype.remove_specific_item = function (arr, card) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === card) {
            arr.splice(i, 1);
            return;
        }
    }
};


function Window_TripleTriad_AfterMatch() {
    this.initialize.apply(this, arguments);
}

Window_TripleTriad_AfterMatch.prototype = Object.create(Window_Base.prototype);
Window_TripleTriad_AfterMatch.prototype.constructor = Window_TripleTriad_AfterMatch;

Window_TripleTriad_AfterMatch.prototype.initialize = function (x, y, width, height) {
    Window_Base.prototype.initialize.call(this, new Rectangle(x, y, width, height));
};

function Window_TripleTriad_AfterMatch_Confirmation() {
    this.initialize.apply(this, arguments);
}

Window_TripleTriad_AfterMatch_Confirmation.prototype = Object.create(Window_Command.prototype);
Window_TripleTriad_AfterMatch_Confirmation.prototype.constructor = Window_TripleTriad_AfterMatch_Confirmation;

Window_TripleTriad_AfterMatch_Confirmation.prototype.initialize = function (x, y, width, height) {
    Window_Command.prototype.initialize.call(this, new Rectangle(x, y, width, height));
};

Window_TripleTriad_AfterMatch_Confirmation.prototype.makeCommandList = function () {
    this.addCommand("Yes", 'Yes');
    this.addCommand("No", 'No');
};

Window_TripleTriad_AfterMatch_Confirmation.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.deactivate();
        this.callOkHandler();
        this.close();
    } else {
        this.playBuzzerSound();
    }
};


//-----------------------------------------------------------------------------
// Scene_Album_TT
//
// This is the Album configuration for Triple Triad

function Scene_Album_TT() {
    this.load_plugin_parameters();
    this.load_variables();
    this.initialize.apply(this, arguments);
    this.createBackground();
    this.createWindowLayer();
    this.initialize_cardList_windows();
    this.initialize_cardDetails_windows();
    this.initialize_hand_windows();
    this.initialize_help_windows();
    this.add_single_back_image();
    this.create_cards();
    this.create_extra_buttons();
};

Scene_Album_TT.prototype = Object.create(Scene_Base.prototype);
Scene_Album_TT.prototype.constructor = Scene_Album_TT;

//-----------------------------------------------------------------------------
// Function : create_extra_buttons - creates background image
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.create_extra_buttons = function () {
    this.leaveBtn = new Sprite_Clickable();
    this.leaveBtn.bitmap = ImageManager.loadTripleTriad(this.extras['Album Back Button']);
    this.leaveBtn.x = parseInt(this.extras['Album Back Button X'])
    this.leaveBtn.y = parseInt(this.extras['Album Back Button Y'])
    this.addChild(this.leaveBtn);
    this.duelBtn = new Sprite_Clickable();
    this.duelBtn.bitmap = ImageManager.loadTripleTriad(this.extras['Album Duel Button']);
    this.duelBtn.x = parseInt(this.extras['Album Duel Button X'])
    this.duelBtn.y = parseInt(this.extras['Album Duel Button Y'])
    this.addChild(this.duelBtn);
}

//-----------------------------------------------------------------------------
// Function : createBackground - creates background image
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.createBackground = function () {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = ImageManager.loadTripleTriad(this.image_list['AlbumBackground']);
    this.addChild(this._backSprite);
};
//-----------------------------------------------------------------------------
// Function : load_variables - loads variables
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.load_variables = function () {
    this.index = 0;
    this.old_index = 0;
    this.triple_triad_frame_count = 0;
    this.card_start_position = [];
    this.card_end_position = [];
    console.log($dataTripleTriad.push_triple_triad && ($dataTripleTriad.all_cards.length + $dataTripleTriad.self_tt_cards.length) < 5);
    if ($dataTripleTriad.push_triple_triad && ($dataTripleTriad.all_cards.length + $dataTripleTriad.self_tt_cards.length) < 5)
        this.phase = 7;
    else
        this.phase = 0;
    this.use_window = this.image_list['Use_Window'] == "true" ? true : false
};
//-----------------------------------------------------------------------------
// Function : load_plugin_parameters - initiates the triple triad variables
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.load_plugin_parameters = function () {
    this.image_list = JSON.parse(PluginManager.parameters('tripleTriad')['Album']);
    this.card_list = JSON.parse(PluginManager.parameters('tripleTriad')['Card Creation']);
    this.aux_images = JSON.parse(PluginManager.parameters('tripleTriad')['Image Configuration']);
    this.extras = JSON.parse(PluginManager.parameters('tripleTriad')['Extras']);
};

//-----------------------------------------------------------------------------
// Function : initialize_cardList_windows - initiates the card list Window
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.initialize_cardList_windows = function () {

    this._cardListWindow = new Window_TripleTriad_CardList(200, 200, 200, Graphics.height - 200);
    for (var n = 0; n < this.card_list.length; n++)
        this._cardListWindow.setHandler(JSON.parse(this.card_list[n])['Name'], this.addCard.bind(this));
    this.addWindow(this._cardListWindow);
    if (!this.use_window)
        this._cardListWindow.opacity = 0;
};
//-----------------------------------------------------------------------------
// Function : initialize_help_windows - initiates the help_window
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.initialize_help_windows = function () {
    this._help = new Window_Base(new Rectangle(0, 0, Graphics.width, 80));
    this._help.drawText(this.image_list["HelpText"], -20, 0, this._help.width, 'center');
    this.addWindow(this._help);
    if (!this.use_window)
        this._help.opacity = 0;
};
//-----------------------------------------------------------------------------
// Function : initialize_cardList_windows - initiates the card list Window
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.initialize_hand_windows = function () {
    this._handWindow = new Window_Base(new Rectangle(0, 80, Graphics.widtFh, 220));
    this.addWindow(this._handWindow);
    if (!this.use_window)
        this._handWindow.opacity = 0;
};

//-----------------------------------------------------------------------------
// Function : initialize_cardDetails_windows - Initiates card Details
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.initialize_cardDetails_windows = function () {
    this._cardDetailsWindow = new Window_TripleTriad_CardDetails(200, 200, Graphics.width - 200, Graphics.height - 200);
    this.addWindow(this._cardDetailsWindow);
    if (!this.use_window)
        this._cardDetailsWindow.opacity = 0;
};

//-----------------------------------------------------------------------------
// Function : addCard - adds card to hand
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.addCard = function () {
    if ($dataTripleTriad.self_tt_cards.length == 5)
        if ($dataTripleTriad.push_triple_triad) {
            $dataTripleTriad.push_triple_triad = false;
            SceneManager.push(Scene_TripleTriad);
            return;
        }
        else {
            this.close_all_windows();
            this.phase = 6;
            return;
        }
    this._cardListWindow.deactivate();
    this.phase = 1;
    this.remove_specific_item($dataTripleTriad.all_cards, this.index);
    this.add_single_card_image(this._cards_player_1_A, $dataTripleTriad.self_tt_cards.length, parseInt(this.image_list['Cards_Hand_X']) + $dataTripleTriad.self_tt_cards.length * parseInt(this.image_list['Distance']), parseInt(this.image_list['Cards_Hand_Y']), this.index, false);
    this.card_end_position[0] = 100 + $dataTripleTriad.self_tt_cards.length * parseInt(this.image_list['Distance']);
    $dataTripleTriad.self_tt_cards.push(this.index);
    this._cardDetailsWindow.refresh(this.index);
    this.triple_triad_frame_count = 0;
    this.card_start_position[0] = Graphics.width + this._cards_back_cards.width / 2;
    this.card_start_position[1] = parseInt(this.image_list['Cards_Hand_Y']);
    this._cards_back_cards.x = this.card_start_position[0];
    this._cards_back_cards.y = this.card_start_position[1];
    this._cards_back_cards.scale.x = 1;
    this.card_end_position[1] = parseInt(this.image_list['Cards_Hand_Y']);
    this._cards_back_cards.opacity = 255;
};
//-----------------------------------------------------------------------------
// Function : move_card_to_board - moves card to the board
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.move_card_to_hand = function () {

    if (this.triple_triad_frame_count >= 15) {
        this._cards_back_cards.x = this.card_end_position[0];
        this._cards_back_cards.y = this.card_end_position[1];
        this.phase = 2;
        this.phase_flip = 0;
        AudioManager.playSe({ name: this.aux_images['card_flipping_sound'], pan: 0, pitch: 100, volume: 100 });
    }
    else {
        var x = this.card_end_position[0] - this.card_start_position[0];
        var y = this.card_end_position[1] - this.card_start_position[1];
        this._cards_back_cards.x += parseInt(x / 15);
        this._cards_back_cards.y += parseInt(y / 15);
    }
};

//-----------------------------------------------------------------------------
// Function : move_card_to_board - moves card to the board
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.move_card_back = function () {

    if (this.triple_triad_frame_count >= 15) {
        this._cards_back_cards.x = this.card_end_position[0];
        this._cards_back_cards.y = this.card_end_position[1];
        this.phase = 0;
        this.phase_flip = 0;
        AudioManager.playSe({ name: this.aux_images['card_flipping_sound'], pan: 0, pitch: 100, volume: 100 });
    }
    else {
        var x = this.card_end_position[0] - this.card_start_position[0];
        var y = this.card_end_position[1] - this.card_start_position[1];
        this._cards_back_cards.x += parseInt(x / 15);
        this._cards_back_cards.y += parseInt(y / 15);
    }
};
//-----------------------------------------------------------------------------
// Function : create_cards - creates Card Images Images
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.create_cards = function () {
    this._cards_player_1_A = new Array(5);
    for (var c = 0; c < $dataTripleTriad.self_tt_cards.length; c++) {
        this.add_single_card_image(this._cards_player_1_A, c, parseInt(this.image_list['Cards_Hand_X']) + c * parseInt(this.image_list['Distance']), parseInt(this.image_list['Cards_Hand_Y']), $dataTripleTriad.self_tt_cards[c])
    };
};
//-----------------------------------------------------------------------------
// Function : add_single_card_image - creates card single image
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.add_single_card_image = function (card_pointer, index, x, y, cardId, scale = true) {
    card_pointer[index] = new Sprite_Card();
    card_name = JSON.parse(this.card_list[cardId])["Image_Player_1"];
    card_pointer[index].x = x;
    card_pointer[index].y = y;
    card_pointer[index].bitmap = ImageManager.loadTripleTriad(card_name);
    this.addChild(card_pointer[index]);
    card_pointer[index].anchor.x = 0.5;
    card_pointer[index].anchor.y = 0.5;
    if (!scale)
        card_pointer[index].scale.x = 0;
};

//-----------------------------------------------------------------------------
// Function : add_single_back_image - creates card single back image
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.add_single_back_image = function () {
    this._cards_back_cards = new Sprite();
    this._cards_back_cards.bitmap = ImageManager.loadTripleTriad(this.aux_images['back_card_image']);
    this.addChild(this._cards_back_cards);
    this._cards_back_cards.anchor.x = 0.5;
    this._cards_back_cards.anchor.y = 0.5;
    this._cards_back_cards.scale.x = 0;

}
//-----------------------------------------------------------------------------
// Function : remove_specific_item - removes specific card from array
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.remove_specific_item = function (arr, card) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === card) {
            arr.splice(i, 1);
            return;
        }
    }
};
//-----------------------------------------------------------------------------
// Function : update - Updates process
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.update = function () {
    Scene_Base.prototype.update.call(this);
    this.triple_triad_frame_count++;
    if (this.leaveBtn.isPressed() && TouchInput.isTriggered()) {
        if ($dataTripleTriad.push_triple_triad) {
            SoundManager.playBuzzer();
        }
        else {
            this.close_all_windows();
            this.phase = 6;
        }
    }
    if (this.duelBtn.isPressed() && TouchInput.isTriggered()) {
        if ($dataTripleTriad.push_triple_triad && $dataTripleTriad.self_tt_cards.length == 5) {
            $dataTripleTriad.push_triple_triad = false;
            SoundManager.playOk()
            SceneManager.push(Scene_TripleTriad);
            return;
        }
        else {
            SoundManager.playBuzzer()
        }
    }
    switch (this.phase) {
        case 0:
            this.index = this._cardListWindow.index();
            if (this.index != this.old_index) {
                this._cardDetailsWindow.refresh(this.index);
                this.old_index = this.index;
            }
            if (Input.isTriggered('cancel'))
                this.phase = 3;
            this.process_touch_cancel();
            break;

        case 1:
            this.move_card_to_hand();
            break;
        case 2:
            this.add_card_to_hand();
            break;
        case 3:
            this.remove_last_card();
            break;
        case 4:
            this.remove_last_card_animation();
            break;
        case 5:
            this.move_card_back();
            break;
        case 6:
            this.move_scene();
            break;
        case 7:
            this.open_not_enough_cards_window();
            break;
        case 8:
            this.wait_for_click();
            break;
    }
};
//-----------------------------------------------------------------------------
// Function : add_card_to_hand - adds a card
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.wait_for_click = function () {
    if (Input.isTriggered('ok') || Input.isTriggered('cancel') || TouchInput.isTriggered()) {
        SoundManager.playCancel();
        this.close_all_windows();
        SceneManager.pop();
    }
};
//-----------------------------------------------------------------------------
// Function : add_card_to_hand - adds a card
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.open_not_enough_cards_window = function () {
    this._cardListWindow.deactivate();
    this.low_cards = new Window_Base(new Rectangle(0, 200, Graphics.width, 80));
    this.low_cards.contents.fontSize = 30;
    this.addWindow(this.low_cards);
    this.low_cards.drawText(this.image_list["LowCards"], -20, 0, this._help.width, 'center');
    this.phase = 8;
};

//-----------------------------------------------------------------------------
// Function : add_card_to_hand - adds a card
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.move_scene = function () {
    this.leaveBtn.opacity -= 10;
    this.duelBtn.opacity -= 10;
    if (this._backSprite.opacity > 0) {
        this._backSprite.opacity -= 10;
        for (var n = 0; n < 5; n++) {
            if (this._cards_player_1_A[n] != null)
                this._cards_player_1_A[n].opacity -= 10;
        }
    }
    else
        SceneManager.pop();
};
//-----------------------------------------------------------------------------
// Function : add_card_to_hand - adds a card
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.process_touch_cancel = function () {
    if ($dataTripleTriad.self_tt_cards.length > 0 && this._cards_player_1_A[$dataTripleTriad.self_tt_cards.length - 1]._touching)
        this.phase = 3;
};
//-----------------------------------------------------------------------------
// Function : add_card_to_hand - adds a card
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.add_card_to_hand = function () {
    this.flip_x_card(this._cards_player_1_A[$dataTripleTriad.self_tt_cards.length - 1], this._cards_back_cards);
    if (this.phase_flip == 1) {
        this._cardListWindow.activate();
        this.phase = 0;
    }
};

//-----------------------------------------------------------------------------
// Function : remove_last_card_animation - removes last card animation
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.remove_last_card_animation = function () {
    if (this.phase_flip == 0)
        this.flip_x_card(this._cards_back_cards, this._cards_player_1_A[$dataTripleTriad.self_tt_cards.length]);
    else if (this.phase_flip == 1) {
        this.phase = 5;
        this.phase_flip = 0;
        this.card_end_position[0] = Graphics.width + this._cards_back_cards.width / 2;
        this.card_end_position[1] = parseInt(this.image_list['Cards_Hand_Y']);
        this.card_start_position[0] = this._cards_back_cards.x;
        this.card_start_position[1] = this._cards_back_cards.y;
        this.triple_triad_frame_count = 0;
        this._cardDetailsWindow.refresh(this.index);
    }
};

//-----------------------------------------------------------------------------
// Function : flip_x_card - flips cards horizontally
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.remove_last_card = function () {
    if ($dataTripleTriad.self_tt_cards.length == 0) {
        this.phase = 0;
        this._cardListWindow.activate();
        if ($dataTripleTriad.push_triple_triad) {
            SoundManager.playBuzzer();
        }
        else {
            this.close_all_windows();
            this.phase = 6;
        }
        return;
    }
    SoundManager.playCancel();
    $dataTripleTriad.all_cards.push($dataTripleTriad.self_tt_cards[$dataTripleTriad.self_tt_cards.length - 1]);
    this._cards_back_cards.y = parseInt(this.image_list['Cards_Hand_Y']);
    this._cards_back_cards.scale.x = 0;
    this._cards_back_cards.opacity = 255;
    $dataTripleTriad.self_tt_cards.pop();
    this._cards_back_cards.x = parseInt(this.image_list['Cards_Hand_X']) + $dataTripleTriad.self_tt_cards.length * parseInt(this.image_list['Distance']);
    this.phase_flip = 0;
    this.phase = 4;
};
//-----------------------------------------------------------------------------
// Function : close_all_windows - closes all windows
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.close_all_windows = function () {
    this._handWindow.close();
    this._help.close();
    this._cardDetailsWindow.close();
    this._cardListWindow.close();
};


//-----------------------------------------------------------------------------
// Function : flip_x_card - flips cards horizontally
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.flip_x_card = function (cardA, cardB) {
    if (this.phase_flip == 0) {
        if (cardB.scale.x > 0)
            cardB.scale.x = Math.round((cardB.scale.x - 0.1) * 10) / 10;
        else if (cardA.scale.x < 1)
            cardA.scale.x = Math.round((cardA.scale.x + 0.1) * 10) / 10;
        if (cardA.scale.x >= 1)
            this.phase_flip = 1;
    }
};

//-----------------------------------------------------------------------------
// Function : flip_x_card - flips cards horizontally
//-----------------------------------------------------------------------------
Scene_Album_TT.prototype.flip_x_card_b = function (cardA, cardB) {
    if (this.phase_flip == 1) {
        if (cardB.scale.x > 0)
            cardB.scale.x = Math.round((cardB.scale.x - 0.1) * 10) / 10;
        else if (cardA.scale.x < 1)
            cardA.scale.x = Math.round((cardA.scale.x + 0.1) * 10) / 10;
        if (cardA.scale.x >= 1)
            this.phase_flip = 2;
    }
};

function Window_TripleTriad_CardList() {
    this.initialize.apply(this, arguments);
};

Window_TripleTriad_CardList.prototype = Object.create(Window_Command.prototype);
Window_TripleTriad_CardList.prototype.constructor = Window_TripleTriad_CardList;

Window_TripleTriad_CardList.prototype.initialize = function (x, y, width, height) {
    this.windowH = height;
    this.windowW = width;
    this.card_list = JSON.parse(PluginManager.parameters('tripleTriad')['Card Creation']);
    Window_Command.prototype.initialize.call(this, new Rectangle(this, x, y, width, height));
};

Window_TripleTriad_CardList.prototype.makeCommandList = function () {
    for (var n = 0; n < this.card_list.length; n++) {
        if ($dataTripleTriad.self_tt_cards.includes(n) || $dataTripleTriad.all_cards.includes(n))
            this.addCommand(JSON.parse(this.card_list[n])['Name'], JSON.parse(this.card_list[n])['Name']);
        else
            this.addCommand("??????", "N/A", false);
    }
};

Window_TripleTriad_CardList.prototype.windowHeight = function () {
    return this.windowH;
};
Window_TripleTriad_CardList.prototype.windowWidth = function () {
    return this.windowW;
};
Window_TripleTriad_CardList.prototype.processOk = function () {
    if ((this.isCurrentItemEnabled() && $dataTripleTriad.all_cards.includes(this.index())) || $dataTripleTriad.self_tt_cards.length == 5) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else
        this.playBuzzerSound();
};


function Window_TripleTriad_CardDetails() {
    this.initialize.apply(this, arguments);
};

Window_TripleTriad_CardDetails.prototype = Object.create(Window_Base.prototype);
Window_TripleTriad_CardDetails.prototype.constructor = Window_TripleTriad_CardDetails;

Window_TripleTriad_CardDetails.prototype.initialize = function (x, y, width, height) {
    this.load_plugin_parameters();
    Window_Base.prototype.initialize.call(this, new Rectangle(x, y, width, height));
    this.refresh(0);
};

Window_TripleTriad_CardDetails.prototype.load_plugin_parameters = function () {
    this.card_list = JSON.parse(PluginManager.parameters('tripleTriad')['Card Creation']);
    this.aux_images = JSON.parse(PluginManager.parameters('tripleTriad')['Image Configuration']);
    this.album_text = JSON.parse(PluginManager.parameters('tripleTriad')['Album']);
    this.album_Positions = JSON.parse(PluginManager.parameters('tripleTriad')['Album Positions']);
};


Window_TripleTriad_CardDetails.prototype.refresh = function (cardId) {
    this.contents.clear();
    if ($dataTripleTriad.self_tt_cards.includes(cardId) || $dataTripleTriad.all_cards.includes(cardId))
        card_name = JSON.parse(this.card_list[cardId])["Image_Player_1"];
    else
        card_name = this.aux_images['back_card_image'];
    this._cardBitmap = new Sprite();
    this._cardBitmap.bitmap = ImageManager.loadTripleTriad(card_name);
    this.addChild(this._cardBitmap);
    this._cardBitmap.x = parseInt(this.album_Positions["Card Position X"]);
    this._cardBitmap.y = parseInt(this.album_Positions["Card Position Y"]);
    this._cardBitmap.anchor.x = 0.5;
    this._cardBitmap.anchor.y = 0.5;
    var count = 0;
    for (var i = 0; i < $dataTripleTriad.all_cards.length; ++i) {
        if ($dataTripleTriad.all_cards[i] == cardId)
            count++;
    }
    var total = parseInt(JSON.parse(this.card_list[cardId])["Power(UP)"]);
    total += parseInt(JSON.parse(this.card_list[cardId])["Power(LEFT)"]);
    total += parseInt(JSON.parse(this.card_list[cardId])["Power(RIGHT)"]);
    total += parseInt(JSON.parse(this.card_list[cardId])["Power(DOWN)"]);
    if ($dataTripleTriad.self_tt_cards.includes(cardId) || $dataTripleTriad.all_cards.includes(cardId)) {
        this.drawText(this.album_text["TotalOwned"] + " " + count, parseInt(this.album_Positions["Total Owned X"]), parseInt(this.album_Positions["Total Owned Y"]), this.width, 'left');
        this.drawText(this.album_text["TotalPower"] + " " + total, parseInt(this.album_Positions["Total Power X"]), parseInt(this.album_Positions["Total Power Y"]), this.width, 'left');
        this.drawText(this.album_text["Rarity"] + " " + JSON.parse(this.card_list[cardId])["Rarity"], parseInt(this.album_Positions["Rarity X"]), parseInt(this.album_Positions["Rarity Y"]), this.width, 'left');
        this.drawText(this.album_text["Price"] + " " + JSON.parse(this.card_list[cardId])["Price"], parseInt(this.album_Positions["Price X"]), parseInt(this.album_Positions["Price Y"]), this.width, 'left');
        this.drawTextEx(this.album_text["Description"] + " " + JSON.parse(JSON.parse(this.card_list[cardId])["card_description"]), parseInt(this.album_Positions["Description X"]), parseInt(this.album_Positions["Description Y"]));
    }
    else {
        this.drawText(this.album_text["TotalOwned"] + " " + count, parseInt(this.album_Positions["Total Owned X"]), parseInt(this.album_Positions["Total Owned Y"]), this.width, 'left');
        this.drawText(this.album_text["TotalPower"] + " " + "???", parseInt(this.album_Positions["Total Power X"]), parseInt(this.album_Positions["Total Power Y"]), this.width, 'left');
        this.drawText(this.album_text["Rarity"] + " " + "???", parseInt(this.album_Positions["Rarity X"]), parseInt(this.album_Positions["Rarity Y"]), this.width, 'left');
        this.drawText(this.album_text["Price"] + " " + "???", parseInt(this.album_Positions["Price X"]), parseInt(this.album_Positions["Price Y"]), this.width, 'left');
        this.drawTextEx(this.album_text["Description"] + " " + "???", parseInt(this.album_Positions["Description X"]), parseInt(this.album_Positions["Description Y"]));
    }
};



