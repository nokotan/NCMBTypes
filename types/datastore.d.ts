import { Query } from "./query"
import { Operation } from "./operation"

/**
 * データストアへの入出力について扱うクラスです。
 */
export declare class Data extends Operation {
  
    /**
     * オブジェクトを保存します。
     * @param callback コールバック関数
     */
    save(callback?: Function): Promise<void>;

    /**
     * オブジェクトを更新します。
     * @param callback コールバック関数
     */
    update(callback?: Function): Promise<void>;

    /**
     * オブジェクトを削除します。
     * @param callback コールバック関数
     */
    delete(callback?: Function): Promise<void>;
}

export interface DataConstructor extends Query {
    /**
     * 新規エントリを作成します。
     */
    new(): Data;
}