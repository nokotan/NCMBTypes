import { DataConstructor } from "./datastore"

/**
 * すべてのNCMBクラスおよびメソッドを定義します。
 */
declare class NCMB {
    /**
     * @param apikey アプリケーションキー。必須
     * @param clientkey クライアントキー。必須
     * @param config 通信設定。省略可能
     */
    constructor (apikey: string, clientKey: string, config?: object);

    /**
     * @param name mobile backend にインスタンスを保存するクラス名。
     */
    DataStore(name: string): DataConstructor;

    /**
     * 指定したキーに値を設定します。
     * @param key 値を設定したいキー
     * @param value キーに設定する値
     */
    set(key: string, value: any): this;

    /**
     * 指定したキー設定されている値を取得します。
     * @param key 値を取得したいキー
     * @returns keyに対応する値
     */
    get(key: string): any;

    /**
     * レスポンスシグネチャーをチェック許可を設定します。
     * @param value true/falseでチェック可否設定する値
     */
    enableResponseValidation(value: boolean): void;

    /**
     * レスポンスシグネチャーをチェック許可設定を取得します
     */
    getResponseValidation(): any;
}

export = NCMB;