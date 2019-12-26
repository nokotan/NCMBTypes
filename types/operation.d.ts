/**
 * 更新時に、既に保存されている値に対して操作を行うオペランドを扱うモジュールです。（set, getは更新時以外も利用可能。）
 * 
 * DataStore, User, Role, Installation クラスから呼び出し、それぞれのプロトタイプメソッドとして利用します。
 */
export declare class Operation {
    /**
     * 指定したキー設定されている値を取得します。
     * @param key 値を取得したいキー
     * @returns keyに対応する値
     */
    get(key: string): any;

    /**
     * 指定したキーに値を設定します。
     * @param key 値を設定したいキー
     * @param value キーに設定する値
     */
    set(key: string, value: any): this;

    /**
     * 更新時に、指定したキーの値を指定分だけ増加させる設定をします。
     * @param key 処理を設定したいキー
     * @param amount 更新時の増加量。省略可能で、その場合は1が設定される
     */
    setIncrement(key: string, amount: number): this;

    /**
     * 更新時に、指定したキーの配列末尾にオブジェクトを追加する設定をします。
     * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
     * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
     * @param key 処理を設定したいキー
     * @param objects 更新時に配列に追加する値もしくは値の配列
     */
    add(key: string, objects: ArrayLike<any> | any): this;

    /**
     * 更新時に、指定したキーの配列末尾に、重複したデータを避けてオブジェクトを追加する設定をします。
     * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
     * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
     * @param key 処理を設定したいキー
     * @param objects 配列に追加する値もしくは値の配列。既にobjectsにある値を追加しようとした場合エラーが返る
     */
    addUnique(key: string, objects: ArrayLike<any> | any): this;

    /**
     * 更新時に、指定したキーの配列からオブジェクトを削除する設定をします。
     * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
     * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
     * @param key 処理を設定したいキー
     * @param objects 配列から削除する値もしくは値の配列
     */
    remove(key: string, objects: ArrayLike<any> | any): this;
}