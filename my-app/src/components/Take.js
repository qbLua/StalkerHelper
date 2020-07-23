import Store_character from './Character/Store_character';
import { Player_stats } from './Logics/Logics';

const Take = (slot_img, item_img, slot, params) => {
    Player_stats(slot, params);
    Store_character._currentValue[slot_img] = item_img;
    window.history.back();
}

export default Take;