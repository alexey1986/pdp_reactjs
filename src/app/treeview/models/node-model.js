import { Model } from 'react-axiom';

class ListItemModel extends Model {
    static defaultState() {
      return {
        id: null,
        description: '',
        completed: false
      };
    }
}