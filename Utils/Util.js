export default class Util {

    static myInstance = null;
    _navData = "";

    static getInstance() {
        if (Util.myInstance == null) {
            Util.myInstance = new Util();
        }
        return this.myInstance;
    }

    getNavData() {
        return this._navData;
    }

    setNavData(navData) {
        this._navData = navData;
    }
}
