declare namespace NCMB {
    /**
     * @interface NCMB.AclConstructor
     */
    interface AclConstructor {
        /**
         * @method
         * @name NCMB.AclConstructor#new
         * @param {Object} permissions Acl情報のJSONオブジェクト
         * @returns {NCMB.Acl}
         */
        new(permissions: any): NCMB.Acl;
    }
    /**
    * オブジェクトへのアクセス権限を設定するクラスです。
    *
    * DataStoreやUserクラスのインスタンスに付加して利用します。<br>
    * 指定するユーザおよびロールはmobile backendに保存済みである必要があります。
    *
    * @class NCMB.Acl
    * @param {Object} permissions Acl情報のJSONオブジェクト
     */
    class Acl {
        constructor(permissions: any);
        /**
         * 全体への読み込み権限を設定します。
         *
         * @method NCMB.Acl#setPublicReadAccess
         * @param {boolean} allowed true/false
         * @return {NCMB.Acl} 権限追加後のインスタンス
         */
        setPublicReadAccess(allowed: boolean): NCMB.Acl;
        /**
         * 全体への書き込み権限を設定します。
         *
         * @method NCMB.Acl#setPublicWriteAccess
         * @param {boolean} allowed true/false
         * @return {NCMB.Acl} 権限追加後のインスタンス
         */
        setPublicWriteAccess(allowed: boolean): NCMB.Acl;
        /**
         * 特定ユーザへの読み込み権限を設定します。
         *
         * @method NCMB.Acl#setUserReadAccess
         * @param {NCMB.User} user Userのインスタンス
         * @param {boolean} allowed true/false
         * @return {NCMB.Acl} 権限追加後のインスタンス
         */
        setUserReadAccess(user: NCMB.User, allowed: boolean): NCMB.Acl;
        /**
         * 特定ユーザへの書き込み権限を設定します。
         *
         * @method NCMB.Acl#setUserWriteAccess
         * @param {NCMB.User} user Userのインスタンス
         * @param {boolean} allowed true/false
         * @return {NCMB.Acl} 権限追加後のインスタンス
         */
        setUserWriteAccess(user: NCMB.User, allowed: boolean): NCMB.Acl;
        /**
         * 特定ロールへの読み込み権限を設定します。
         * roleNameにロールのインスタンスを入力することもできます。
         *
         * @method NCMB.Acl#setRoleReadAccess
         * @param {string} roleName ロール名
         * @param {boolean} allowed true/false
         * @return {NCMB.Role} 権限追加後のインスタンス
         */
        setRoleReadAccess(roleName: string, allowed: boolean): NCMB.Role;
        /**
         * 特定ロールへの書き込み権限を設定します。
         * roleNameにロールのインスタンスを入力することもできます。
         *
         * @method NCMB.Acl#setRoleWriteAccess
         * @param {string} roleName ロール名
         * @param {boolean} allowed true/false
         * @return {NCMB.Role} 権限追加後のインスタンス
         */
        setRoleWriteAccess(roleName: string, allowed: boolean): NCMB.Role;
        /**
         * 指定したユーザもしくはロールに設定されている権限を取得します。
         *
         * @method NCMB.Acl#get
         * @param {NCMB.User|NCMB.Role|string} target 権限を取得するユーザもしくはロールのインスタンス。全体の権限を取得する場合は"public"を入力
         * @param {string} type read/write
         * @return {NCMB.Role} true/false
         */
        get(target: NCMB.User | NCMB.Role | string, type: string): NCMB.Role;
    }
    /**
     * @interface NCMB.DataStoreConstructor
     * @extends {Query}
     */
    interface DataStoreConstructor extends Query {
        /**
         * @method
         * @name NCMB.DataStoreConstructor#new
         * @param {string} name mobile backend にインスタンスを保存するクラス名。
         * @returns {NCMB.DataStore}
         */
        new(name: string): NCMB.DataStore;
        /**
         * クエリを自分で記述して設定します。
         *
         * @method Query#where
         * @param {Object} where JSON形式のクエリオブジェクト
         * @return {this}
         */
        where(where: any): this;
        /**
         * 指定したキーの値が条件と等しいオブジェクトを検索します。
         *
         * @method Query#equalTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        equalTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件と等しくないオブジェクトを検索します。
         *
         * @method Query#notEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        notEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より小さいオブジェクトを検索します。
         *
         * @method Query#lessThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以下のオブジェクトを検索します。
         *
         * @method Query#lessThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より大きいオブジェクトを検索します。
         *
         * @method Query#greaterThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以上のオブジェクトを検索します。
         *
         * @method Query#greaterThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#in
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        in(key: string, values: any[]): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notIn
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notIn(key: string, values: any[]): this;
        /**
         * 指定したキーに値が存在するオブジェクトを検索します。
         * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
         *
         * @method Query#exists
         * @param {string} key 値を比較するキー
         * @param {boolean} exist falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
         * @return {this}
         */
        exists(key: string, exist: boolean): this;
        /**
         * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
         *
         * @method Query#regularExpressionTo
         * @param {string} key 値を比較するキー
         * @param {string} regex 検索する正規表現
         * @return {this}
         */
        regularExpressionTo(key: string, regex: string): this;
        /**
         * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#inArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        inArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
         *
         * @method Query#allInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        allInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#near
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @return {this}
         */
        near(key: string, location: NCMB.GeoPoint): this;
        /**
         * 検索範囲内(Km)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinKilometers
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(Km)
         * @return {this}
         */
        withinKilometers(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(ml)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinMiles
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(ml)
         * @return {this}
         */
        withinMiles(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(rad)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinRadians
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(rad)
         * @return {this}
         */
        withinRadians(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲を南西と北東の位置情報から矩形で設定し、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinSquare
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} southWestVertex 検索矩形の南西側の頂点
         * @param {NCMB.GeoPoint} northEastVertex 検索矩形の北東側の頂点
         * @return {this}
         */
        withinSquare(key: string, southWestVertex: NCMB.GeoPoint, northEastVertex: NCMB.GeoPoint): this;
        /**
         * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
         * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
         *
         * @method Query#or
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        or(subqueries: any[] | Query): this;
        /**
         * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
         *
         * @method Query#select
         * @param {string} key メインクエリのクラスで値を比較するキー
         * @param {string} subkey サブクエリの検索結果で値を比較するキー
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        select(key: string, subkey: string, subqueries: any[] | Query): this;
        /**
         * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要があります。
         *
         * @method Query#relatedTo
         * @param object
         * @param {string} key オブジェクトが関連づけられているキー
         * @return {this}
         */
        relatedTo(object: any, key: string): this;
        /**
         * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要がある。
         *
         * @method Query#inQuery
         * @param {string} key ポインタを保存したキー
         * @param {Query} subquery 検索条件
         * @return {this}
         */
        inQuery(key: string, subquery: Query): this;
        /**
         * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
         * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
         *
         * @method Query#include
         * @param {string} key ポインタの中身を取得するキー
         * @return {this}
         */
        include(key: string): this;
        /**
         * 検索結果の配列と共に、検索結果の件数を取得します。
         * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
         * 検索結果配列にcountプロパティとして付加されます。
         *
         * @method Query#count
         * @return {this}
         */
        count(): this;
        /**
         * 指定したキーの昇順にソートして検索結果を取得します。
         * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
         * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
         *
         * @method Query#order
         * @param {string} key ソートするキー
         * @param descending trueを指定した場合、降順でソートされる。省略可能。
         * @return {this}
         */
        order(key: string, descending: any): this;
        /**
         * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
         *
         * @method Query#limit
         * @param {number} limit 最大取得件数
         * @return {this}
         */
        limit(limit: number): this;
        /**
         * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
         *
         * @method Query#skip
         * @param {number} skip 検索結果から除く件数
         * @return {this}
         */
        skip(skip: number): this;
        /**
         * objectIdから一意のオブジェクトを取得します。
         *
         * @method Query#fetchById
         * @param {string} id 取得したいオブジェクトのobjectId
         * @param {function} callback コールバック関数
         * @return {Promise<any>} オブジェクト
         */
        fetchById(id: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
         *
         * @method Query#fetch
         * @param {function} callback コールバック関数
         * @return {Promise<Object>} 検索結果に合致したオブジェクト
         */
        fetch(callback: (...params: any[]) => any): Promise<object>;
        /**
         * 検索条件に合致するオブジェクトをすべて取得します。
         *
         * @method Query#fetchAll
         * @param {function} callback コールバック関数
         * @return {Promise<Array>} 検索結果に合致したオブジェクトの配列
         */
        fetchAll(callback: (...params: any[]) => any): Promise<any[]>;
    }
    /**
    * データストアへの入出力について扱うクラスです。
    *
    * @class NCMB.DataStore
    * @extends {Operation}
    * @param {string} name mobile backend にインスタンスを保存するクラス名。
     */
    class DataStore extends Operation {
        constructor(name: string);
        /**
         * オブジェクトを保存します。
         *
         * @method NCMB.DataStore#save
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        save(callback: (...params: any[]) => any): Promise<this>;
        /**
         * オブジェクトを更新します。
         *
         * @method NCMB.DataStore#update
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        update(callback: (...params: any[]) => any): Promise<this>;
        /**
         * オブジェクトを削除します。
         *
         * @method NCMB.DataStore#delete
         * @param {function} callback コールバック関数
         * @return {Promise<void>}
         */
        delete(callback: (...params: any[]) => any): Promise<void>;
        /**
         * 指定したキー設定されている値を取得します。
         *
         * @method Operation#get
         * @param {string} key 値を取得したいキー
         * @return {object} keyに対応する値
         */
        get(key: string): any;
        /**
         * 指定したキーに値を設定します。
         *
         * @method Operation#set
         * @param {string} key 値を設定したいキー
         * @param value キーに設定する値
         * @return {this}
         */
        set(key: string, value: any): this;
        /**
         * 更新時に、指定したキーの値を指定分だけ増加させる設定をします。
         *
         * @method Operation#setIncrement
         * @param {string} key 処理を設定したいキー
         * @param {number} amount 更新時の増加量。省略可能で、その場合は1が設定される
         * @return {this}
         */
        setIncrement(key: string, amount: number): this;
        /**
         * 更新時に、指定したキーの配列末尾にオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#add
         * @param {string} key 処理を設定したいキー
         * @param  objects 更新時に配列に追加する値もしくは値の配列
         * @return {this}
         */
        add(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列末尾に、重複したデータを避けてオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#addUnique
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列に追加する値もしくは値の配列。既にobjectsにある値を追加しようとした場合エラーが返る
         * @return {this}
         */
        addUnique(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列からオブジェクトを削除する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#remove
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列から削除する値もしくは値の配列
         * @return {this}
         */
        remove(key: string, objects: any): this;
    }
    /**
    * ファイルストアへの入出力を扱うクラスです。
    *
    * このクラスはすべてクラスメソッドで構成されており、インスタンスを生成せずに利用します。
    * Queryではファイルの付加情報（ファイル名、更新日時など）のみを検索・取得し、ファイルのバイナリデータそのものは取得しません。
    * バイナリデータを取得したい場合はdownloadメソッドを利用してください。
    *
    * @class NCMB.File
     */
    class File {
        /**
         * ファイルストアにファイルを保存します。
         *
         * @method NCMB.File#upload
         * @param {String} fileName 取得するバイナリデータのファイル名
         * @param {} fileData 保存するファイルデータ
         * @param {NCMB.Acl} acl ファイルに対するアクセス権減
         * @return {Promise<any>} APIレスポンス
         */
        upload(fileName: string, fileData: any, acl: NCMB.Acl): Promise<any>;
        /**
         * 指定したファイルのバイナリデータを取得します。
         *
         * @method NCMB.File#download
         * @param {String} fileName 取得するバイナリデータのファイル名
         * @param {String} responseType レスポンスバイナリのデータ形式 arraybuffer/blob (ブラウザ/Monaca利用時のみ必要)
         * @param {Function} callback コールバック関数
         * @return {Promise<any>} ファイルのバイナリデータ（付加情報は取得しません）
         */
        download(fileName: string, responseType: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 指定したファイルのACL情報を更新します。
         *
         * @method NCMB.File#updateACL
         * @param {String} fileName 更新するファイル名
         * @param {NCMB.Acl} acl 更新後のacl情報を設定したncmb.ACLインスタンス
         * @param {Function} callback コールバック関数
         * @return {Promise<any>} APIレスポンス
         */
        updateACL(fileName: string, acl: NCMB.Acl, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 指定したファイルを削除します。
         *
         * @method NCMB.File#delete
         * @param {String} fileName 削除するファイル名
         * @param {Function} callback コールバック関数
         * @returns {Promise<void>}
         */
        delete(fileName: string, callback: (...params: any[]) => any): Promise<void>;
    }
    /**
     * @interface NCMB.GeoPointConstructor
     */
    interface GeoPointConstructor {
        /**
         * @method
         * @name NCMB.GeoPointConstructor#new
         * @param {number} lat 緯度 -90~90の範囲で指定する
         * @param {number} lng 経度 -180~180の範囲で指定する
         * @returns {NCMB.GeoPoint}
         */
        new(lat: number, lng: number): NCMB.GeoPoint;
    }
    /**
    * 位置情報を扱うクラスです。
    *
    * ncmbオブジェクトのプロパティに設定して利用します。
    *
    * @class NCMB.GeoPoint
    * @param {number} lat 緯度 -90~90の範囲で指定する
    * @param {number} lng 経度 -180~180の範囲で指定する
     */
    class GeoPoint {
        constructor(lat: number, lng: number);
    }
    /**
     * @interface NCMB.InstallationConstructor
     * @extends Query
     */
    interface InstallationConstructor extends Query {
        /**
         * @method
         * @name NCMB.InstallationConstructor#new
         * @returns {NCMB.Installation}
         */
        new(): NCMB.Installation;
        /**
         * クエリを自分で記述して設定します。
         *
         * @method Query#where
         * @param {Object} where JSON形式のクエリオブジェクト
         * @return {this}
         */
        where(where: any): this;
        /**
         * 指定したキーの値が条件と等しいオブジェクトを検索します。
         *
         * @method Query#equalTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        equalTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件と等しくないオブジェクトを検索します。
         *
         * @method Query#notEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        notEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より小さいオブジェクトを検索します。
         *
         * @method Query#lessThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以下のオブジェクトを検索します。
         *
         * @method Query#lessThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より大きいオブジェクトを検索します。
         *
         * @method Query#greaterThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以上のオブジェクトを検索します。
         *
         * @method Query#greaterThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#in
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        in(key: string, values: any[]): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notIn
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notIn(key: string, values: any[]): this;
        /**
         * 指定したキーに値が存在するオブジェクトを検索します。
         * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
         *
         * @method Query#exists
         * @param {string} key 値を比較するキー
         * @param {boolean} exist falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
         * @return {this}
         */
        exists(key: string, exist: boolean): this;
        /**
         * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
         *
         * @method Query#regularExpressionTo
         * @param {string} key 値を比較するキー
         * @param {string} regex 検索する正規表現
         * @return {this}
         */
        regularExpressionTo(key: string, regex: string): this;
        /**
         * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#inArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        inArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
         *
         * @method Query#allInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        allInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#near
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @return {this}
         */
        near(key: string, location: NCMB.GeoPoint): this;
        /**
         * 検索範囲内(Km)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinKilometers
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(Km)
         * @return {this}
         */
        withinKilometers(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(ml)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinMiles
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(ml)
         * @return {this}
         */
        withinMiles(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(rad)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinRadians
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(rad)
         * @return {this}
         */
        withinRadians(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲を南西と北東の位置情報から矩形で設定し、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinSquare
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} southWestVertex 検索矩形の南西側の頂点
         * @param {NCMB.GeoPoint} northEastVertex 検索矩形の北東側の頂点
         * @return {this}
         */
        withinSquare(key: string, southWestVertex: NCMB.GeoPoint, northEastVertex: NCMB.GeoPoint): this;
        /**
         * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
         * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
         *
         * @method Query#or
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        or(subqueries: any[] | Query): this;
        /**
         * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
         *
         * @method Query#select
         * @param {string} key メインクエリのクラスで値を比較するキー
         * @param {string} subkey サブクエリの検索結果で値を比較するキー
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        select(key: string, subkey: string, subqueries: any[] | Query): this;
        /**
         * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要があります。
         *
         * @method Query#relatedTo
         * @param object
         * @param {string} key オブジェクトが関連づけられているキー
         * @return {this}
         */
        relatedTo(object: any, key: string): this;
        /**
         * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要がある。
         *
         * @method Query#inQuery
         * @param {string} key ポインタを保存したキー
         * @param {Query} subquery 検索条件
         * @return {this}
         */
        inQuery(key: string, subquery: Query): this;
        /**
         * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
         * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
         *
         * @method Query#include
         * @param {string} key ポインタの中身を取得するキー
         * @return {this}
         */
        include(key: string): this;
        /**
         * 検索結果の配列と共に、検索結果の件数を取得します。
         * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
         * 検索結果配列にcountプロパティとして付加されます。
         *
         * @method Query#count
         * @return {this}
         */
        count(): this;
        /**
         * 指定したキーの昇順にソートして検索結果を取得します。
         * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
         * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
         *
         * @method Query#order
         * @param {string} key ソートするキー
         * @param descending trueを指定した場合、降順でソートされる。省略可能。
         * @return {this}
         */
        order(key: string, descending: any): this;
        /**
         * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
         *
         * @method Query#limit
         * @param {number} limit 最大取得件数
         * @return {this}
         */
        limit(limit: number): this;
        /**
         * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
         *
         * @method Query#skip
         * @param {number} skip 検索結果から除く件数
         * @return {this}
         */
        skip(skip: number): this;
        /**
         * objectIdから一意のオブジェクトを取得します。
         *
         * @method Query#fetchById
         * @param {string} id 取得したいオブジェクトのobjectId
         * @param {function} callback コールバック関数
         * @return {Promise<any>} オブジェクト
         */
        fetchById(id: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
         *
         * @method Query#fetch
         * @param {function} callback コールバック関数
         * @return {Promise<Object>} 検索結果に合致したオブジェクト
         */
        fetch(callback: (...params: any[]) => any): Promise<object>;
        /**
         * 検索条件に合致するオブジェクトをすべて取得します。
         *
         * @method Query#fetchAll
         * @param {function} callback コールバック関数
         * @return {Promise<Array>} 検索結果に合致したオブジェクトの配列
         */
        fetchAll(callback: (...params: any[]) => any): Promise<any[]>;
    }
    /**
    * プッシュ配信端末の操作を扱うクラスです。
    *
    * @class NCMB.Installation
    * @extends {Operation}
    * @param {Object} attrs インスタンス生成時に設定するプロパティ
     */
    class Installation extends Operation {
        constructor(attrs: any);
        /**
         * 配信端末情報を削除します。
         *
         * @method NCMB.Installation#delete
         * @param {function} callback コールバック関数
         * @return true
         */
        delete(callback: (...params: any[]) => any): any;
        /**
         * 配信端末情報を更新します。
         *
         * @method NCMB.Installation#update
         * @param {function} callback コールバック関数
         * @return this
         */
        update(callback: (...params: any[]) => any): any;
        /**
         * 指定したキー設定されている値を取得します。
         *
         * @method Operation#get
         * @param {string} key 値を取得したいキー
         * @return {object} keyに対応する値
         */
        get(key: string): any;
        /**
         * 指定したキーに値を設定します。
         *
         * @method Operation#set
         * @param {string} key 値を設定したいキー
         * @param value キーに設定する値
         * @return {this}
         */
        set(key: string, value: any): this;
        /**
         * 更新時に、指定したキーの値を指定分だけ増加させる設定をします。
         *
         * @method Operation#setIncrement
         * @param {string} key 処理を設定したいキー
         * @param {number} amount 更新時の増加量。省略可能で、その場合は1が設定される
         * @return {this}
         */
        setIncrement(key: string, amount: number): this;
        /**
         * 更新時に、指定したキーの配列末尾にオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#add
         * @param {string} key 処理を設定したいキー
         * @param  objects 更新時に配列に追加する値もしくは値の配列
         * @return {this}
         */
        add(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列末尾に、重複したデータを避けてオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#addUnique
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列に追加する値もしくは値の配列。既にobjectsにある値を追加しようとした場合エラーが返る
         * @return {this}
         */
        addUnique(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列からオブジェクトを削除する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#remove
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列から削除する値もしくは値の配列
         * @return {this}
         */
        remove(key: string, objects: any): this;
    }
    /**
     * @interface NCMB.PushConstructor
     * @extends Query
     */
    interface PushConstructor extends Query {
        /**
         * @method
         * @name NCMB.PushConstructor#new
         * @returns {NCMB.Push}
         */
        new(): NCMB.Push;
        /**
         * クエリを自分で記述して設定します。
         *
         * @method Query#where
         * @param {Object} where JSON形式のクエリオブジェクト
         * @return {this}
         */
        where(where: any): this;
        /**
         * 指定したキーの値が条件と等しいオブジェクトを検索します。
         *
         * @method Query#equalTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        equalTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件と等しくないオブジェクトを検索します。
         *
         * @method Query#notEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        notEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より小さいオブジェクトを検索します。
         *
         * @method Query#lessThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以下のオブジェクトを検索します。
         *
         * @method Query#lessThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より大きいオブジェクトを検索します。
         *
         * @method Query#greaterThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以上のオブジェクトを検索します。
         *
         * @method Query#greaterThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#in
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        in(key: string, values: any[]): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notIn
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notIn(key: string, values: any[]): this;
        /**
         * 指定したキーに値が存在するオブジェクトを検索します。
         * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
         *
         * @method Query#exists
         * @param {string} key 値を比較するキー
         * @param {boolean} exist falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
         * @return {this}
         */
        exists(key: string, exist: boolean): this;
        /**
         * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
         *
         * @method Query#regularExpressionTo
         * @param {string} key 値を比較するキー
         * @param {string} regex 検索する正規表現
         * @return {this}
         */
        regularExpressionTo(key: string, regex: string): this;
        /**
         * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#inArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        inArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
         *
         * @method Query#allInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        allInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#near
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @return {this}
         */
        near(key: string, location: NCMB.GeoPoint): this;
        /**
         * 検索範囲内(Km)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinKilometers
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(Km)
         * @return {this}
         */
        withinKilometers(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(ml)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinMiles
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(ml)
         * @return {this}
         */
        withinMiles(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(rad)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinRadians
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(rad)
         * @return {this}
         */
        withinRadians(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲を南西と北東の位置情報から矩形で設定し、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinSquare
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} southWestVertex 検索矩形の南西側の頂点
         * @param {NCMB.GeoPoint} northEastVertex 検索矩形の北東側の頂点
         * @return {this}
         */
        withinSquare(key: string, southWestVertex: NCMB.GeoPoint, northEastVertex: NCMB.GeoPoint): this;
        /**
         * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
         * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
         *
         * @method Query#or
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        or(subqueries: any[] | Query): this;
        /**
         * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
         *
         * @method Query#select
         * @param {string} key メインクエリのクラスで値を比較するキー
         * @param {string} subkey サブクエリの検索結果で値を比較するキー
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        select(key: string, subkey: string, subqueries: any[] | Query): this;
        /**
         * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要があります。
         *
         * @method Query#relatedTo
         * @param object
         * @param {string} key オブジェクトが関連づけられているキー
         * @return {this}
         */
        relatedTo(object: any, key: string): this;
        /**
         * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要がある。
         *
         * @method Query#inQuery
         * @param {string} key ポインタを保存したキー
         * @param {Query} subquery 検索条件
         * @return {this}
         */
        inQuery(key: string, subquery: Query): this;
        /**
         * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
         * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
         *
         * @method Query#include
         * @param {string} key ポインタの中身を取得するキー
         * @return {this}
         */
        include(key: string): this;
        /**
         * 検索結果の配列と共に、検索結果の件数を取得します。
         * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
         * 検索結果配列にcountプロパティとして付加されます。
         *
         * @method Query#count
         * @return {this}
         */
        count(): this;
        /**
         * 指定したキーの昇順にソートして検索結果を取得します。
         * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
         * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
         *
         * @method Query#order
         * @param {string} key ソートするキー
         * @param descending trueを指定した場合、降順でソートされる。省略可能。
         * @return {this}
         */
        order(key: string, descending: any): this;
        /**
         * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
         *
         * @method Query#limit
         * @param {number} limit 最大取得件数
         * @return {this}
         */
        limit(limit: number): this;
        /**
         * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
         *
         * @method Query#skip
         * @param {number} skip 検索結果から除く件数
         * @return {this}
         */
        skip(skip: number): this;
        /**
         * objectIdから一意のオブジェクトを取得します。
         *
         * @method Query#fetchById
         * @param {string} id 取得したいオブジェクトのobjectId
         * @param {function} callback コールバック関数
         * @return {Promise<any>} オブジェクト
         */
        fetchById(id: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
         *
         * @method Query#fetch
         * @param {function} callback コールバック関数
         * @return {Promise<Object>} 検索結果に合致したオブジェクト
         */
        fetch(callback: (...params: any[]) => any): Promise<object>;
        /**
         * 検索条件に合致するオブジェクトをすべて取得します。
         *
         * @method Query#fetchAll
         * @param {function} callback コールバック関数
         * @return {Promise<Array>} 検索結果に合致したオブジェクトの配列
         */
        fetchAll(callback: (...params: any[]) => any): Promise<any[]>;
    }
    /**
    * プッシュ通知の操作を扱うクラスです。
    *
    * @class NCMB.Push
    * @param {Object} attrs インスタンス生成時に設定するプロパティ
     */
    class Push {
        constructor(attrs: any);
        /**
         * プッシュ通知をmobile backendに登録します。
         * 即時配信フラグがtrueの場合はすぐに配信されます。
         *
         * @method NCMB.Push#send
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        send(callback: (...params: any[]) => any): Promise<this>;
        /**
         * 未送信のプッシュ通知を削除します。
         *
         * @method NCMB.Push#delete
         * @param {function} callback コールバック関数
         * @return {Promise<any>}
         */
        delete(callback: (...params: any[]) => any): Promise<any>;
        /**
         * 未送信のプッシュ通知の内容を更新します。
         *
         * @method NCMB.Push#update
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        update(callback: (...params: any[]) => any): Promise<this>;
        /**
         * 指定したキーに値を設定します。
         * 設定可能なキーはREST APIリファレンスを参照してください。
         *
         * @method NCMB.Push#set
         * @param {string} key 値を設定するキー。
         * @param value キーに設定する値
         * @return {this}
         */
        set(key: string, value: any): this;
    }
    /**
     * @interface NCMB.RelationConstructor
     * @extends Query
     */
    interface RelationConstructor extends Query {
        /**
         * @method
         * @name NCMB.RelationConstructor#new
         * @param {string} relatingClass 関連づけるクラス名。省略可能
         * @returns {NCMB.Relation}
         */
        new(relatingClass: string): NCMB.Relation;
        /**
         * クエリを自分で記述して設定します。
         *
         * @method Query#where
         * @param {Object} where JSON形式のクエリオブジェクト
         * @return {this}
         */
        where(where: any): this;
        /**
         * 指定したキーの値が条件と等しいオブジェクトを検索します。
         *
         * @method Query#equalTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        equalTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件と等しくないオブジェクトを検索します。
         *
         * @method Query#notEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        notEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より小さいオブジェクトを検索します。
         *
         * @method Query#lessThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以下のオブジェクトを検索します。
         *
         * @method Query#lessThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より大きいオブジェクトを検索します。
         *
         * @method Query#greaterThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以上のオブジェクトを検索します。
         *
         * @method Query#greaterThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#in
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        in(key: string, values: any[]): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notIn
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notIn(key: string, values: any[]): this;
        /**
         * 指定したキーに値が存在するオブジェクトを検索します。
         * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
         *
         * @method Query#exists
         * @param {string} key 値を比較するキー
         * @param {boolean} exist falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
         * @return {this}
         */
        exists(key: string, exist: boolean): this;
        /**
         * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
         *
         * @method Query#regularExpressionTo
         * @param {string} key 値を比較するキー
         * @param {string} regex 検索する正規表現
         * @return {this}
         */
        regularExpressionTo(key: string, regex: string): this;
        /**
         * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#inArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        inArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
         *
         * @method Query#allInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        allInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#near
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @return {this}
         */
        near(key: string, location: NCMB.GeoPoint): this;
        /**
         * 検索範囲内(Km)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinKilometers
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(Km)
         * @return {this}
         */
        withinKilometers(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(ml)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinMiles
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(ml)
         * @return {this}
         */
        withinMiles(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(rad)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinRadians
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(rad)
         * @return {this}
         */
        withinRadians(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲を南西と北東の位置情報から矩形で設定し、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinSquare
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} southWestVertex 検索矩形の南西側の頂点
         * @param {NCMB.GeoPoint} northEastVertex 検索矩形の北東側の頂点
         * @return {this}
         */
        withinSquare(key: string, southWestVertex: NCMB.GeoPoint, northEastVertex: NCMB.GeoPoint): this;
        /**
         * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
         * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
         *
         * @method Query#or
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        or(subqueries: any[] | Query): this;
        /**
         * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
         *
         * @method Query#select
         * @param {string} key メインクエリのクラスで値を比較するキー
         * @param {string} subkey サブクエリの検索結果で値を比較するキー
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        select(key: string, subkey: string, subqueries: any[] | Query): this;
        /**
         * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要があります。
         *
         * @method Query#relatedTo
         * @param object
         * @param {string} key オブジェクトが関連づけられているキー
         * @return {this}
         */
        relatedTo(object: any, key: string): this;
        /**
         * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要がある。
         *
         * @method Query#inQuery
         * @param {string} key ポインタを保存したキー
         * @param {Query} subquery 検索条件
         * @return {this}
         */
        inQuery(key: string, subquery: Query): this;
        /**
         * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
         * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
         *
         * @method Query#include
         * @param {string} key ポインタの中身を取得するキー
         * @return {this}
         */
        include(key: string): this;
        /**
         * 検索結果の配列と共に、検索結果の件数を取得します。
         * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
         * 検索結果配列にcountプロパティとして付加されます。
         *
         * @method Query#count
         * @return {this}
         */
        count(): this;
        /**
         * 指定したキーの昇順にソートして検索結果を取得します。
         * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
         * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
         *
         * @method Query#order
         * @param {string} key ソートするキー
         * @param descending trueを指定した場合、降順でソートされる。省略可能。
         * @return {this}
         */
        order(key: string, descending: any): this;
        /**
         * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
         *
         * @method Query#limit
         * @param {number} limit 最大取得件数
         * @return {this}
         */
        limit(limit: number): this;
        /**
         * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
         *
         * @method Query#skip
         * @param {number} skip 検索結果から除く件数
         * @return {this}
         */
        skip(skip: number): this;
        /**
         * objectIdから一意のオブジェクトを取得します。
         *
         * @method Query#fetchById
         * @param {string} id 取得したいオブジェクトのobjectId
         * @param {function} callback コールバック関数
         * @return {Promise<any>} オブジェクト
         */
        fetchById(id: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
         *
         * @method Query#fetch
         * @param {function} callback コールバック関数
         * @return {Promise<Object>} 検索結果に合致したオブジェクト
         */
        fetch(callback: (...params: any[]) => any): Promise<object>;
        /**
         * 検索条件に合致するオブジェクトをすべて取得します。
         *
         * @method Query#fetchAll
         * @param {function} callback コールバック関数
         * @return {Promise<Array>} 検索結果に合致したオブジェクトの配列
         */
        fetchAll(callback: (...params: any[]) => any): Promise<any[]>;
    }
    /**
    * リレーションについて扱うクラスです。
    *
    * オブジェクトのプロパティに対してインスタンスを設定することで、同一クラスに限り複数のオブジェクトを関連づけることができます。
    * 関連づけるオブジェクトがすべて同一クラスであれば、関連づけられるオブジェクトとは別クラスでも指定可能です。
    *
    * インスタンス生成時に関連づけるクラス名を指定可能です。指定しなかった場合、最初に追加したオブジェクトのクラスが指定されます。
    * 指定した以外のクラスのインスタンスを入力した場合、エラーが返ります。
    *
    * @class NCMB.Relation
    * @param {string} relatingClass 関連づけるクラス名。省略可能
     */
    class Relation {
        constructor(relatingClass: string);
        /**
         * 関連オブジェクトに追加するオブジェクトを設定します。
         *
         * @method NCMB.Relation#add
         * @param object 追加するオブジェクト
         * @return this
         */
        add(object: any): any;
        /**
         * 関連オブジェクトから削除するオブジェクトを設定します。
         *
         * @method NCMB.Relation#remove
         * @param object 削除するオブジェクト
         * @return this
         */
        remove(object: any): any;
    }
    /**
     * @interface NCMB.RoleConstructor
     * @extends Query
     */
    interface RoleConstructor extends Query {
        /**
         * @method
         * @name NCMB.RoleConstructor#new
         * @param {string} roleName ロール名。インスタンス生成時に必須
         * @param {Object} attrs インスタンス生成時に設定するプロパティ
         * @returns {NCMB.Role}
         */
        new(roleName: string, attrs: any): NCMB.Role;
        /**
         * クエリを自分で記述して設定します。
         *
         * @method Query#where
         * @param {Object} where JSON形式のクエリオブジェクト
         * @return {this}
         */
        where(where: any): this;
        /**
         * 指定したキーの値が条件と等しいオブジェクトを検索します。
         *
         * @method Query#equalTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        equalTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件と等しくないオブジェクトを検索します。
         *
         * @method Query#notEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        notEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より小さいオブジェクトを検索します。
         *
         * @method Query#lessThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以下のオブジェクトを検索します。
         *
         * @method Query#lessThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より大きいオブジェクトを検索します。
         *
         * @method Query#greaterThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以上のオブジェクトを検索します。
         *
         * @method Query#greaterThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#in
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        in(key: string, values: any[]): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notIn
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notIn(key: string, values: any[]): this;
        /**
         * 指定したキーに値が存在するオブジェクトを検索します。
         * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
         *
         * @method Query#exists
         * @param {string} key 値を比較するキー
         * @param {boolean} exist falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
         * @return {this}
         */
        exists(key: string, exist: boolean): this;
        /**
         * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
         *
         * @method Query#regularExpressionTo
         * @param {string} key 値を比較するキー
         * @param {string} regex 検索する正規表現
         * @return {this}
         */
        regularExpressionTo(key: string, regex: string): this;
        /**
         * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#inArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        inArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
         *
         * @method Query#allInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        allInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#near
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @return {this}
         */
        near(key: string, location: NCMB.GeoPoint): this;
        /**
         * 検索範囲内(Km)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinKilometers
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(Km)
         * @return {this}
         */
        withinKilometers(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(ml)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinMiles
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(ml)
         * @return {this}
         */
        withinMiles(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(rad)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinRadians
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(rad)
         * @return {this}
         */
        withinRadians(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲を南西と北東の位置情報から矩形で設定し、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinSquare
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} southWestVertex 検索矩形の南西側の頂点
         * @param {NCMB.GeoPoint} northEastVertex 検索矩形の北東側の頂点
         * @return {this}
         */
        withinSquare(key: string, southWestVertex: NCMB.GeoPoint, northEastVertex: NCMB.GeoPoint): this;
        /**
         * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
         * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
         *
         * @method Query#or
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        or(subqueries: any[] | Query): this;
        /**
         * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
         *
         * @method Query#select
         * @param {string} key メインクエリのクラスで値を比較するキー
         * @param {string} subkey サブクエリの検索結果で値を比較するキー
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        select(key: string, subkey: string, subqueries: any[] | Query): this;
        /**
         * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要があります。
         *
         * @method Query#relatedTo
         * @param object
         * @param {string} key オブジェクトが関連づけられているキー
         * @return {this}
         */
        relatedTo(object: any, key: string): this;
        /**
         * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要がある。
         *
         * @method Query#inQuery
         * @param {string} key ポインタを保存したキー
         * @param {Query} subquery 検索条件
         * @return {this}
         */
        inQuery(key: string, subquery: Query): this;
        /**
         * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
         * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
         *
         * @method Query#include
         * @param {string} key ポインタの中身を取得するキー
         * @return {this}
         */
        include(key: string): this;
        /**
         * 検索結果の配列と共に、検索結果の件数を取得します。
         * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
         * 検索結果配列にcountプロパティとして付加されます。
         *
         * @method Query#count
         * @return {this}
         */
        count(): this;
        /**
         * 指定したキーの昇順にソートして検索結果を取得します。
         * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
         * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
         *
         * @method Query#order
         * @param {string} key ソートするキー
         * @param descending trueを指定した場合、降順でソートされる。省略可能。
         * @return {this}
         */
        order(key: string, descending: any): this;
        /**
         * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
         *
         * @method Query#limit
         * @param {number} limit 最大取得件数
         * @return {this}
         */
        limit(limit: number): this;
        /**
         * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
         *
         * @method Query#skip
         * @param {number} skip 検索結果から除く件数
         * @return {this}
         */
        skip(skip: number): this;
        /**
         * objectIdから一意のオブジェクトを取得します。
         *
         * @method Query#fetchById
         * @param {string} id 取得したいオブジェクトのobjectId
         * @param {function} callback コールバック関数
         * @return {Promise<any>} オブジェクト
         */
        fetchById(id: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
         *
         * @method Query#fetch
         * @param {function} callback コールバック関数
         * @return {Promise<Object>} 検索結果に合致したオブジェクト
         */
        fetch(callback: (...params: any[]) => any): Promise<object>;
        /**
         * 検索条件に合致するオブジェクトをすべて取得します。
         *
         * @method Query#fetchAll
         * @param {function} callback コールバック関数
         * @return {Promise<Array>} 検索結果に合致したオブジェクトの配列
         */
        fetchAll(callback: (...params: any[]) => any): Promise<any[]>;
    }
    /**
    * ロールについて扱うクラスです。
    *
    * ユーザや他のロール（子ロール）をまとめて権限管理を行うことができます。
    * ユーザおよび子ロールの追加・削除はsave/update完了時に反映されます。
    *
    * ロールへのユーザもしくは子ロールの追加と削除を同時に行うことはできません。
    * 追加・削除の設定を行い、保存前に他方を設定した場合、後に行った処理が上書きされます。
    *
    * @class NCMB.Role
    * @extends {Operation}
    * @param {string} roleName ロール名。インスタンス生成時に必須
    * @param {Object} attrs インスタンス生成時に設定するプロパティ
     */
    class Role extends Operation {
        constructor(roleName: string, attrs: any);
        /**
         * ロールを保存します。
         *
         * @method NCMB.Role#save
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        save(callback: (...params: any[]) => any): Promise<this>;
        /**
         * ロールを更新します。
         *
         * @method NCMB.Role#update
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        update(callback: (...params: any[]) => any): Promise<this>;
        /**
         * ロールを削除します。
         *
         * @method NCMB.Role#delete
         * @param {function} callback コールバック関数
         * @return true
         */
        delete(callback: (...params: any[]) => any): any;
        /**
         * ロールにユーザを追加します。
         *
         * @method NCMB.Role#addUser
         * @param {User} object 追加するユーザ
         * @return {this}
         */
        addUser(object: User): this;
        /**
         * ロールに子ロールを追加します。
         *
         * @method NCMB.Role#addRole
         * @param {Role} object 追加する子ロール
         * @return {this}
         */
        addRole(object: Role): this;
        /**
         * ロールからユーザを削除します。
         *
         * @method NCMB.Role#removeUser
         * @param {User} object 削除するユーザ
         * @return {this}
         */
        removeUser(object: User): this;
        /**
         * ロールから子ロールを削除します。
         *
         * @method NCMB.Role#removeRole
         * @param {Role} object 削除する子ロール
         * @return {this}
         */
        removeRole(object: Role): this;
        /**
         * ロールに登録されているユーザの一覧を取得します。
         *
         * @method NCMB.Role#fetchUser
         * @param {function} callback コールバック関数
         * @return {Array} ユーザインスタンスの配列
         */
        fetchUser(callback: (...params: any[]) => any): any[];
        /**
         * ロールに登録されている子ロールの一覧を取得します。
         *
         * @method NCMB.Role#fetchRole
         * @param {function} callback コールバック関数
         * @return {Array} 子ロールインスタンスの配列
         */
        fetchRole(callback: (...params: any[]) => any): any[];
        /**
         * 指定したキー設定されている値を取得します。
         *
         * @method Operation#get
         * @param {string} key 値を取得したいキー
         * @return {object} keyに対応する値
         */
        get(key: string): any;
        /**
         * 指定したキーに値を設定します。
         *
         * @method Operation#set
         * @param {string} key 値を設定したいキー
         * @param value キーに設定する値
         * @return {this}
         */
        set(key: string, value: any): this;
        /**
         * 更新時に、指定したキーの値を指定分だけ増加させる設定をします。
         *
         * @method Operation#setIncrement
         * @param {string} key 処理を設定したいキー
         * @param {number} amount 更新時の増加量。省略可能で、その場合は1が設定される
         * @return {this}
         */
        setIncrement(key: string, amount: number): this;
        /**
         * 更新時に、指定したキーの配列末尾にオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#add
         * @param {string} key 処理を設定したいキー
         * @param  objects 更新時に配列に追加する値もしくは値の配列
         * @return {this}
         */
        add(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列末尾に、重複したデータを避けてオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#addUnique
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列に追加する値もしくは値の配列。既にobjectsにある値を追加しようとした場合エラーが返る
         * @return {this}
         */
        addUnique(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列からオブジェクトを削除する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#remove
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列から削除する値もしくは値の配列
         * @return {this}
         */
        remove(key: string, objects: any): this;
    }
    /**
     * @interface NCMB.ScriptConstructor
     */
    interface ScriptConstructor {
        /**
         * @method
         * @name NCMB.ScriptConstructor#new
         * @returns {NCMB.Script}
         */
        new(): NCMB.Script;
    }
    /**
    * Scriptの実行を扱うクラスです。
    *
    * メソッドは全て実行可能なインスタンスを生成し、状態を付与して返すファクトリメソッドです。
    * メソッドチェインでヘッダ、ボディ、クエリを付与し、execメソッドで実行します。
    *
    * Script機能からのresponseは型が固定でないため、bodyキーにレスポンスを格納したObjectを返却します。
    *
    * @class NCMB.Script
     */
    class Script {
        /**
         * インスタンスに対してチェインしてリクエストヘッダを付与するメソッドです。
         *
         * @method NCMB.Script#set
         * @param  {Object} header リクエストヘッダを示すJSON形式のオブジェクト
         * @return {NCMB.Script} this   引数のリクエストヘッダが付加された実行可能インスタンス
         */
        set(header: any): NCMB.Script;
        /**
         * インスタンスに対してチェインしてリクエストボディを付与するメソッドです。
         *
         * @method NCMB.Script#data
         * @param  {Object} body リクエストボディを示すJSON形式のオブジェクト
         * @return {NCMB.Script} this 引数のリクエストボディが付加された実行可能インスタンス
         */
        data(body: any): NCMB.Script;
        /**
         * インスタンスに対してチェインしてクエリストリングを付与するメソッドです。
         *
         * @method NCMB.Script#query
         * @param  {Object} query クエリストリングを示すJSON形式のオブジェクト
         * @return {NCMB.Script} this  引数のクエリストリングが付加された実行可能インスタンス
         */
        query(query: any): NCMB.Script;
        /**
         * Scriptを実行するメソッドです。
         *
         * @method NCMB.Script#exec
         * @param  {string}  method      HTTPメソッド
         * @param  {string}  scriptName  スクリプトファイル名
         * @return {Object}  res         Scriptに定義されたレスポンスを内包するJSON形式のオブジェクト
         */
        exec(method: string, scriptName: string): any;
    }
    /**
     * @interface NCMB.UserConstructor
     * @extends Query
     */
    interface UserConstructor extends Query {
        /**
         * @method
         * @name NCMB.UserConstructor#new
         * @returns {NCMB.User}
         */
        new(): NCMB.User;
        /**
         * 現在セッションに使用しているユーザの情報を取得します。
         * セッションにセッショントークンを利用していない場合、nullが返ります。
         * また、画面遷移などでログイン中にセッショントークン情報が失われたしまった場合、
         * getCurrentUserを実行することで、ローカルに保存されているカレントユーザ情報から
         * セッショントークンを設定し直します。
         *
         * @method NCMB.UserConstructor#getCurrentUser
         * @return {NCMB.User} セッション中のユーザオブジェクト
         */
        getCurrentUser(): NCMB.User;
        /**
         * メールアドレス認証の登録メールを送信します。
         * メール内でパスワード入力を行い、登録が完了した時点で認証が可能となります。
         *
         * @method NCMB.UserConstructor#requestSignUpEmail
         * @param {string} mailAddress 登録するメールアドレス
         * @param {function} callback コールバック関数
         * @return {Promise<any>} APIレスポンス
         */
        requestSignUpEmail(mailAddress: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * ログイン（セッショントークンの取得）およびカレントユーザへの設定を行います。
         * userNameおよびpasswordプロパティをもつUserインスタンスを第一引数に設定しそのユーザでログイン可能です。
         * その場合、第二引数を省略可能です。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * セッショントークンの期限切れが発生している場合、一度ログアウトしてから再度ログインしてください。
         *
         * @method NCMB.UserConstructor#login
         * @param {string} userName ユーザ名
         * @param {string} password パスワード
         * @param {function} callback コールバック関数
         * @return {Promise<User>} ログインしたUserインスタンス
         */
        login(userName: string, password: string, callback: (...params: any[]) => any): Promise<User>;
        /**
         * ログイン（セッショントークンの取得）およびカレントユーザへの設定を行います。
         * mailAddressおよびpasswordプロパティをもつUserインスタンスを第一引数に設定し、そのユーザでログイン可能です。
         * その場合、第二引数を省略可能です。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * セッショントークンの期限切れが発生している場合、一度ログアウトしてから再度ログインしてください。
         *
         * @method NCMB.UserConstructor#loginWithMailAddress
         * @param {string} mailAddress メールアドレス
         * @param {string} password パスワード
         * @param {function} callback コールバック関数
         * @return {Promise<User>} ログインしたUserインスタンス
         */
        loginWithMailAddress(mailAddress: string, password: string, callback: (...params: any[]) => any): Promise<User>;
        /**
         * 匿名ユーザとしてログイン（セッショントークンの取得）を行います。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * UUIDは省略可能です。省略した場合、UUIDを乱数で自動生成します。
         * UUIDにUserのインスタンスを入力し、そのインスタンスでログイン可能です。
         * その場合、userNameもしくはauthDataプロパティを持つインスタンスではログインできません。
         *
         * @method NCMB.UserConstructor#loginAsAnonymous
         * @param {string} uuid 端末固有のUUID
         * @param {function} callback コールバック関数
         * @return {Promise<User>} ログインしたUserインスタンス
         */
        loginAsAnonymous(uuid: string, callback: (...params: any[]) => any): Promise<User>;
        /**
         * SNS連携認証ユーザとしてログイン（セッショントークンの取得）およびカレントユーザへの設定を行います。
         * authDataプロパティをもつUserインスタンスを第一引数に設定し、そのユーザでログイン可能です。
         * その場合、第二引数を省略可能です。
         * また、authDataに複数のSNS連携情報を持つインスタンスを設定する場合、第二引数で認証に使用するプロバイダを指定する必要があります。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * セッショントークンの期限切れが発生している場合、一度ログアウトしてから再度ログインしてください。
         *
         * @method NCMB.UserConstructor#loginWith
         * @param {string} provider 連携するサービスプロバイダ名 facebook/twitter/google
         * @param {Object} data 認証に必要な情報を保持したJSON形式のオブジェクト
         * @param {function} callback コールバック関数
         * @return {Promise<User>} ログインしたUserインスタンス
         */
        loginWith(provider: string, data: any, callback: (...params: any[]) => any): Promise<User>;
        /**
         * カレントユーザ情報およびセッショントークンの破棄を行います。
         * カレントユーザに設定されていたインスタンス自体のセッショントークン情報は保持され続けます。
         * 別途プロトタイプメソッドでインスタンスのログアウトを実行してください。
         *
         * @method NCMB.UserConstructor#logout
         * @param {function} callback コールバック関数
         * @return {Promise<User>} ログアウトしたユーザインスタンス
         */
        logout(callback: (...params: any[]) => any): Promise<User>;
        /**
         * クエリを自分で記述して設定します。
         *
         * @method Query#where
         * @param {Object} where JSON形式のクエリオブジェクト
         * @return {this}
         */
        where(where: any): this;
        /**
         * 指定したキーの値が条件と等しいオブジェクトを検索します。
         *
         * @method Query#equalTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        equalTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件と等しくないオブジェクトを検索します。
         *
         * @method Query#notEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        notEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より小さいオブジェクトを検索します。
         *
         * @method Query#lessThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以下のオブジェクトを検索します。
         *
         * @method Query#lessThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        lessThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が条件より大きいオブジェクトを検索します。
         *
         * @method Query#greaterThan
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThan(key: string, value: any): this;
        /**
         * 指定したキーの値が条件以上のオブジェクトを検索します。
         *
         * @method Query#greaterThanOrEqualTo
         * @param {string} key 値を比較するキー
         * @param value 比較する値
         * @return {this}
         */
        greaterThanOrEqualTo(key: string, value: any): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#in
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        in(key: string, values: any[]): this;
        /**
         * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notIn
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notIn(key: string, values: any[]): this;
        /**
         * 指定したキーに値が存在するオブジェクトを検索します。
         * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
         *
         * @method Query#exists
         * @param {string} key 値を比較するキー
         * @param {boolean} exist falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
         * @return {this}
         */
        exists(key: string, exist: boolean): this;
        /**
         * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
         *
         * @method Query#regularExpressionTo
         * @param {string} key 値を比較するキー
         * @param {string} regex 検索する正規表現
         * @return {this}
         */
        regularExpressionTo(key: string, regex: string): this;
        /**
         * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
         *
         * @method Query#inArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        inArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
         *
         * @method Query#notInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        notInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
         *
         * @method Query#allInArray
         * @param {string} key 値を比較するキー
         * @param {Array} values 比較する値
         * @return {this}
         */
        allInArray(key: string, values: any[]): this;
        /**
         * 指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#near
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @return {this}
         */
        near(key: string, location: NCMB.GeoPoint): this;
        /**
         * 検索範囲内(Km)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinKilometers
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(Km)
         * @return {this}
         */
        withinKilometers(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(ml)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinMiles
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(ml)
         * @return {this}
         */
        withinMiles(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲内(rad)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinRadians
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} location 原点とする位置情報
         * @param {number} maxDistance 原点からの検索範囲(rad)
         * @return {this}
         */
        withinRadians(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
        /**
         * 検索範囲を南西と北東の位置情報から矩形で設定し、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
         *
         * @method Query#withinSquare
         * @param {string} key 値を比較するキー
         * @param {NCMB.GeoPoint} southWestVertex 検索矩形の南西側の頂点
         * @param {NCMB.GeoPoint} northEastVertex 検索矩形の北東側の頂点
         * @return {this}
         */
        withinSquare(key: string, southWestVertex: NCMB.GeoPoint, northEastVertex: NCMB.GeoPoint): this;
        /**
         * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
         * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
         *
         * @method Query#or
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        or(subqueries: any[] | Query): this;
        /**
         * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
         *
         * @method Query#select
         * @param {string} key メインクエリのクラスで値を比較するキー
         * @param {string} subkey サブクエリの検索結果で値を比較するキー
         * @param {Array|Query} subqueries 検索条件
         * @return {this}
         */
        select(key: string, subkey: string, subqueries: any[] | Query): this;
        /**
         * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要があります。
         *
         * @method Query#relatedTo
         * @param object
         * @param {string} key オブジェクトが関連づけられているキー
         * @return {this}
         */
        relatedTo(object: any, key: string): this;
        /**
         * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
         * objectはmobile backend に保存済みである必要がある。
         *
         * @method Query#inQuery
         * @param {string} key ポインタを保存したキー
         * @param {Query} subquery 検索条件
         * @return {this}
         */
        inQuery(key: string, subquery: Query): this;
        /**
         * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
         * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
         *
         * @method Query#include
         * @param {string} key ポインタの中身を取得するキー
         * @return {this}
         */
        include(key: string): this;
        /**
         * 検索結果の配列と共に、検索結果の件数を取得します。
         * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
         * 検索結果配列にcountプロパティとして付加されます。
         *
         * @method Query#count
         * @return {this}
         */
        count(): this;
        /**
         * 指定したキーの昇順にソートして検索結果を取得します。
         * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
         * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
         *
         * @method Query#order
         * @param {string} key ソートするキー
         * @param descending trueを指定した場合、降順でソートされる。省略可能。
         * @return {this}
         */
        order(key: string, descending: any): this;
        /**
         * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
         *
         * @method Query#limit
         * @param {number} limit 最大取得件数
         * @return {this}
         */
        limit(limit: number): this;
        /**
         * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
         *
         * @method Query#skip
         * @param {number} skip 検索結果から除く件数
         * @return {this}
         */
        skip(skip: number): this;
        /**
         * objectIdから一意のオブジェクトを取得します。
         *
         * @method Query#fetchById
         * @param {string} id 取得したいオブジェクトのobjectId
         * @param {function} callback コールバック関数
         * @return {Promise<any>} オブジェクト
         */
        fetchById(id: string, callback: (...params: any[]) => any): Promise<any>;
        /**
         * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
         *
         * @method Query#fetch
         * @param {function} callback コールバック関数
         * @return {Promise<Object>} 検索結果に合致したオブジェクト
         */
        fetch(callback: (...params: any[]) => any): Promise<object>;
        /**
         * 検索条件に合致するオブジェクトをすべて取得します。
         *
         * @method Query#fetchAll
         * @param {function} callback コールバック関数
         * @return {Promise<Array>} 検索結果に合致したオブジェクトの配列
         */
        fetchAll(callback: (...params: any[]) => any): Promise<any[]>;
    }
    /**
    * 会員および会員権限によるオブジェクトへのアクセスの管理を扱うクラスです。
    *
    * サインアップで登録の後、ログインすることでセッショントークンを取得します。
    * セッショントークンを保持しているユーザをカレントユーザに設定することで、そのユーザの権限でオブジェクトにアクセスできるようになります。
    * セッショントークンの有効期限はデフォルトで24時間です。期限切れの場合は一度ログアウトした後再度ログインを行ってください。（有効期限はダッシュボードで変更できます。）
    *
    * サインアップできるユーザ種別は、ユーザ名/パスワードでの認証、メールアドレス/パスワードでの認証、SNS連携(facebook/twitter/google)での認証があります。
    * 認証方法によって登録時・ログイン時に使用するメソッドが変わります。
    *
    * @class NCMB.User
    * @extends {Operation}
    * @param {Object} attrs インスタンス生成時に設定するプロパティ
     */
    class User extends Operation {
        constructor(attrs: any);
        /**
         * 現在セッションに使用しているユーザかどうかを判別します。
         *
         * @method NCMB.User#isCurrentUser
         * @return {boolean} true/false
         */
        isCurrentUser(): boolean;
        /**
         * ユーザ名とパスワード認証でユーザを登録します。
         *
         * @method NCMB.User#signUpByAccount
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        signUpByAccount(callback: (...params: any[]) => any): Promise<this>;
        /**
         * SNS連携認証でユーザを登録します。
         * インスタンスのauthDataプロパティに適切なJSONオブジェクトが設定されている場合、providerおよびdataは省略可能です。
         * 複数のプロバイダ情報を一度に登録することは出来ません。
         *
         * @method NCMB.User#signUpWith
         * @param {string} provider 連携するサービスプロバイダ名 facebook/twitter/google
         * @param {Object} data 認証に必要な情報を保持したJSON形式のオブジェクト
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        signUpWith(provider: string, data: any, callback: (...params: any[]) => any): Promise<this>;
        /**
         * メールアドレス認証ユーザの登録メールアドレス宛にパスワード再設定のメールを送信します。
         *
         * @method NCMB.User#requestPasswordReset
         * @param {function} callback コールバック関数
         * @return {Promise<any>} APIレスポンス
         */
        requestPasswordReset(callback: (...params: any[]) => any): Promise<any>;
        /**
         * ユーザ情報の更新を行います。
         *
         * @method NCMB.User#update
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        update(callback: (...params: any[]) => any): Promise<this>;
        /**
         * ユーザ情報の削除を行います。
         *
         * @method NCMB.User#delete
         * @param {function} callback コールバック関数
         * @return {Promise<true>}
         */
        delete(callback: (...params: any[]) => any): Promise<true>;
        /**
         * ログイン（セッショントークンの取得）を行います。
         * カレントユーザへの設定は行いません。
         * userNameおよびpasswordプロパティを保持している必要があります。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * セッショントークンの期限切れが発生している場合、一度ログアウトしてから再度ログインしてください。
         *
         * @method NCMB.User#login
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        login(callback: (...params: any[]) => any): Promise<this>;
        /**
         * ログイン（セッショントークンの取得）を行います。
         * カレントユーザへの設定は行いません。
         * mailAddressおよびpasswordプロパティを保持している必要があります。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * セッショントークンの期限切れが発生している場合、一度ログアウトしてから再度ログインしてください。
         *
         * @method NCMB.User#loginWithMailAddress
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        loginWithMailAddress(callback: (...params: any[]) => any): Promise<this>;
        /**
         * 匿名ユーザとしてログイン（セッショントークンの取得）を行います。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * UUIDは省略可能です。省略した場合、UUIDを乱数で自動生成します。
         * userNameもしくはauthDataプロパティを持つインスタンスではログインできません。
         *
         * @method NCMB.User#loginAsAnonymous
         * @param {string} uuid 端末固有のUUID
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        loginAsAnonymous(uuid: string, callback: (...params: any[]) => any): Promise<this>;
        /**
         * SNS連携認証ユーザとしてログイン（セッショントークンの取得）を行います。
         * authDataプロパティをもつ場合、第一・第二引数を省略可能です。
         * また、authDataに複数のSNS連携情報を持つ場合、第一引数で認証に使用するプロバイダを指定する必要があります。
         * authDataプロパティをもち、かつprovide, dataを入力した場合、入力された情報で認証を行います。
         * すでにセッショントークンを保持している場合、更新処理は行いません。
         * セッショントークンの期限切れが発生している場合、一度ログアウトしてから再度ログインしてください。
         *
         * @method NCMB.User#loginWith
         * @param {string} provider 連携するサービスプロバイダ名 facebook/twitter/google
         * @param {Object} data 認証に必要な情報を保持したJSON形式のオブジェクト
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        loginWith(provider: string, data: any, callback: (...params: any[]) => any): Promise<this>;
        /**
         * インスタンスのセッショントークンの破棄を行います。
         * カレントユーザに設定されているユーザをこのメソッドでログアウトした場合でもカレントユーザ情報は破棄されません。
         * そのままAPIリクエストを行った場合、不正なセッショントークン利用でエラーが返ります。
         *
         * @method NCMB.User#logout
         * @param {function} callback コールバック関数
         * @return {Promise<this>}
         */
        logout(callback: (...params: any[]) => any): Promise<this>;
        /**
         * メールアドレスの確認を行っているかどうかを判別します。
         *
         * @method NCMB.User#isMailAddressConfirmed
         * @return {boolean} 確認済みの場合はtrue/以外はfalse
         */
        isMailAddressConfirmed(): boolean;
        /**
         * 指定したキー設定されている値を取得します。
         *
         * @method Operation#get
         * @param {string} key 値を取得したいキー
         * @return {object} keyに対応する値
         */
        get(key: string): any;
        /**
         * 指定したキーに値を設定します。
         *
         * @method Operation#set
         * @param {string} key 値を設定したいキー
         * @param value キーに設定する値
         * @return {this}
         */
        set(key: string, value: any): this;
        /**
         * 更新時に、指定したキーの値を指定分だけ増加させる設定をします。
         *
         * @method Operation#setIncrement
         * @param {string} key 処理を設定したいキー
         * @param {number} amount 更新時の増加量。省略可能で、その場合は1が設定される
         * @return {this}
         */
        setIncrement(key: string, amount: number): this;
        /**
         * 更新時に、指定したキーの配列末尾にオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#add
         * @param {string} key 処理を設定したいキー
         * @param  objects 更新時に配列に追加する値もしくは値の配列
         * @return {this}
         */
        add(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列末尾に、重複したデータを避けてオブジェクトを追加する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#addUnique
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列に追加する値もしくは値の配列。既にobjectsにある値を追加しようとした場合エラーが返る
         * @return {this}
         */
        addUnique(key: string, objects: any): this;
        /**
         * 更新時に、指定したキーの配列からオブジェクトを削除する設定をします。
         * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
         * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
         *
         * @method Operation#remove
         * @param {string} key 処理を設定したいキー
         * @param  objects 配列から削除する値もしくは値の配列
         * @return {this}
         */
        remove(key: string, objects: any): this;
    }
}

/**
* 更新時に、既に保存されている値に対して操作を行うオペランドを扱うモジュールです。（set, getは更新時以外も利用可能。）
*
* DataStore, User, Role, Installation クラスから呼び出し、それぞれのプロトタイプメソッドとして利用します。
*
* @class Operation
 */
declare class Operation {
    /**
     * 指定したキー設定されている値を取得します。
     *
     * @method Operation#get
     * @param {string} key 値を取得したいキー
     * @return {object} keyに対応する値
     */
    get(key: string): any;
    /**
     * 指定したキーに値を設定します。
     *
     * @method Operation#set
     * @param {string} key 値を設定したいキー
     * @param value キーに設定する値
     * @return {this}
     */
    set(key: string, value: any): this;
    /**
     * 更新時に、指定したキーの値を指定分だけ増加させる設定をします。
     *
     * @method Operation#setIncrement
     * @param {string} key 処理を設定したいキー
     * @param {number} amount 更新時の増加量。省略可能で、その場合は1が設定される
     * @return {this}
     */
    setIncrement(key: string, amount: number): this;
    /**
     * 更新時に、指定したキーの配列末尾にオブジェクトを追加する設定をします。
     * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
     * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
     *
     * @method Operation#add
     * @param {string} key 処理を設定したいキー
     * @param  objects 更新時に配列に追加する値もしくは値の配列
     * @return {this}
     */
    add(key: string, objects: any): this;
    /**
     * 更新時に、指定したキーの配列末尾に、重複したデータを避けてオブジェクトを追加する設定をします。
     * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
     * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
     *
     * @method Operation#addUnique
     * @param {string} key 処理を設定したいキー
     * @param  objects 配列に追加する値もしくは値の配列。既にobjectsにある値を追加しようとした場合エラーが返る
     * @return {this}
     */
    addUnique(key: string, objects: any): this;
    /**
     * 更新時に、指定したキーの配列からオブジェクトを削除する設定をします。
     * objectsは単一オブジェクトおよび配列での複数指定が共に可能。
     * 複数回実行することで、objects末尾にさらにオブジェクトを追加することも可能。
     *
     * @method Operation#remove
     * @param {string} key 処理を設定したいキー
     * @param  objects 配列から削除する値もしくは値の配列
     * @return {this}
     */
    remove(key: string, objects: any): this;
}

/**
* オブジェクトの検索を行うモジュールです。
*
* DataStore, User, Role, Fileクラスから呼び出し、それぞれのクラスメソッドとして利用します。
* 検索条件を設定するメソッドに続けてfetch/fetchAllをメソッドチェーンで実行して利用します。
*
* @class Query
 */
declare class Query {
    /**
     * クエリを自分で記述して設定します。
     *
     * @method Query#where
     * @param {Object} where JSON形式のクエリオブジェクト
     * @return {this}
     */
    where(where: any): this;
    /**
     * 指定したキーの値が条件と等しいオブジェクトを検索します。
     *
     * @method Query#equalTo
     * @param {string} key 値を比較するキー
     * @param value 比較する値
     * @return {this}
     */
    equalTo(key: string, value: any): this;
    /**
     * 指定したキーの値が条件と等しくないオブジェクトを検索します。
     *
     * @method Query#notEqualTo
     * @param {string} key 値を比較するキー
     * @param value 比較する値
     * @return {this}
     */
    notEqualTo(key: string, value: any): this;
    /**
     * 指定したキーの値が条件より小さいオブジェクトを検索します。
     *
     * @method Query#lessThan
     * @param {string} key 値を比較するキー
     * @param value 比較する値
     * @return {this}
     */
    lessThan(key: string, value: any): this;
    /**
     * 指定したキーの値が条件以下のオブジェクトを検索します。
     *
     * @method Query#lessThanOrEqualTo
     * @param {string} key 値を比較するキー
     * @param value 比較する値
     * @return {this}
     */
    lessThanOrEqualTo(key: string, value: any): this;
    /**
     * 指定したキーの値が条件より大きいオブジェクトを検索します。
     *
     * @method Query#greaterThan
     * @param {string} key 値を比較するキー
     * @param value 比較する値
     * @return {this}
     */
    greaterThan(key: string, value: any): this;
    /**
     * 指定したキーの値が条件以上のオブジェクトを検索します。
     *
     * @method Query#greaterThanOrEqualTo
     * @param {string} key 値を比較するキー
     * @param value 比較する値
     * @return {this}
     */
    greaterThanOrEqualTo(key: string, value: any): this;
    /**
     * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
     *
     * @method Query#in
     * @param {string} key 値を比較するキー
     * @param {Array} values 比較する値
     * @return {this}
     */
    in(key: string, values: any[]): this;
    /**
     * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
     *
     * @method Query#notIn
     * @param {string} key 値を比較するキー
     * @param {Array} values 比較する値
     * @return {this}
     */
    notIn(key: string, values: any[]): this;
    /**
     * 指定したキーに値が存在するオブジェクトを検索します。
     * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
     *
     * @method Query#exists
     * @param {string} key 値を比較するキー
     * @param {boolean} exist falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
     * @return {this}
     */
    exists(key: string, exist: boolean): this;
    /**
     * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
     *
     * @method Query#regularExpressionTo
     * @param {string} key 値を比較するキー
     * @param {string} regex 検索する正規表現
     * @return {this}
     */
    regularExpressionTo(key: string, regex: string): this;
    /**
     * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
     *
     * @method Query#inArray
     * @param {string} key 値を比較するキー
     * @param {Array} values 比較する値
     * @return {this}
     */
    inArray(key: string, values: any[]): this;
    /**
     * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
     *
     * @method Query#notInArray
     * @param {string} key 値を比較するキー
     * @param {Array} values 比較する値
     * @return {this}
     */
    notInArray(key: string, values: any[]): this;
    /**
     * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
     *
     * @method Query#allInArray
     * @param {string} key 値を比較するキー
     * @param {Array} values 比較する値
     * @return {this}
     */
    allInArray(key: string, values: any[]): this;
    /**
     * 指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
     *
     * @method Query#near
     * @param {string} key 値を比較するキー
     * @param {NCMB.GeoPoint} location 原点とする位置情報
     * @return {this}
     */
    near(key: string, location: NCMB.GeoPoint): this;
    /**
     * 検索範囲内(Km)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
     *
     * @method Query#withinKilometers
     * @param {string} key 値を比較するキー
     * @param {NCMB.GeoPoint} location 原点とする位置情報
     * @param {number} maxDistance 原点からの検索範囲(Km)
     * @return {this}
     */
    withinKilometers(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
    /**
     * 検索範囲内(ml)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
     *
     * @method Query#withinMiles
     * @param {string} key 値を比較するキー
     * @param {NCMB.GeoPoint} location 原点とする位置情報
     * @param {number} maxDistance 原点からの検索範囲(ml)
     * @return {this}
     */
    withinMiles(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
    /**
     * 検索範囲内(rad)で、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
     *
     * @method Query#withinRadians
     * @param {string} key 値を比較するキー
     * @param {NCMB.GeoPoint} location 原点とする位置情報
     * @param {number} maxDistance 原点からの検索範囲(rad)
     * @return {this}
     */
    withinRadians(key: string, location: NCMB.GeoPoint, maxDistance: number): this;
    /**
     * 検索範囲を南西と北東の位置情報から矩形で設定し、指定したキーの位置情報が指定した位置に近い順でオブジェクトを検索します。
     *
     * @method Query#withinSquare
     * @param {string} key 値を比較するキー
     * @param {NCMB.GeoPoint} southWestVertex 検索矩形の南西側の頂点
     * @param {NCMB.GeoPoint} northEastVertex 検索矩形の北東側の頂点
     * @return {this}
     */
    withinSquare(key: string, southWestVertex: NCMB.GeoPoint, northEastVertex: NCMB.GeoPoint): this;
    /**
     * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
     * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
     *
     * @method Query#or
     * @param {Array|Query} subqueries 検索条件
     * @return {this}
     */
    or(subqueries: any[] | Query): this;
    /**
     * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
     *
     * @method Query#select
     * @param {string} key メインクエリのクラスで値を比較するキー
     * @param {string} subkey サブクエリの検索結果で値を比較するキー
     * @param {Array|Query} subqueries 検索条件
     * @return {this}
     */
    select(key: string, subkey: string, subqueries: any[] | Query): this;
    /**
     * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
     * objectはmobile backend に保存済みである必要があります。
     *
     * @method Query#relatedTo
     * @param object
     * @param {string} key オブジェクトが関連づけられているキー
     * @return {this}
     */
    relatedTo(object: any, key: string): this;
    /**
     * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
     * objectはmobile backend に保存済みである必要がある。
     *
     * @method Query#inQuery
     * @param {string} key ポインタを保存したキー
     * @param {Query} subquery 検索条件
     * @return {this}
     */
    inQuery(key: string, subquery: Query): this;
    /**
     * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
     * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
     *
     * @method Query#include
     * @param {string} key ポインタの中身を取得するキー
     * @return {this}
     */
    include(key: string): this;
    /**
     * 検索結果の配列と共に、検索結果の件数を取得します。
     * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
     * 検索結果配列にcountプロパティとして付加されます。
     *
     * @method Query#count
     * @return {this}
     */
    count(): this;
    /**
     * 指定したキーの昇順にソートして検索結果を取得します。
     * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
     * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
     *
     * @method Query#order
     * @param {string} key ソートするキー
     * @param descending trueを指定した場合、降順でソートされる。省略可能。
     * @return {this}
     */
    order(key: string, descending: any): this;
    /**
     * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
     *
     * @method Query#limit
     * @param {number} limit 最大取得件数
     * @return {this}
     */
    limit(limit: number): this;
    /**
     * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
     *
     * @method Query#skip
     * @param {number} skip 検索結果から除く件数
     * @return {this}
     */
    skip(skip: number): this;
    /**
     * objectIdから一意のオブジェクトを取得します。
     *
     * @method Query#fetchById
     * @param {string} id 取得したいオブジェクトのobjectId
     * @param {function} callback コールバック関数
     * @return {Promise<any>} オブジェクト
     */
    fetchById(id: string, callback: (...params: any[]) => any): Promise<any>;
    /**
     * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
     *
     * @method Query#fetch
     * @param {function} callback コールバック関数
     * @return {Promise<Object>} 検索結果に合致したオブジェクト
     */
    fetch(callback: (...params: any[]) => any): Promise<object>;
    /**
     * 検索条件に合致するオブジェクトをすべて取得します。
     *
     * @method Query#fetchAll
     * @param {function} callback コールバック関数
     * @return {Promise<Array>} 検索結果に合致したオブジェクトの配列
     */
    fetchAll(callback: (...params: any[]) => any): Promise<any[]>;
}

/**
* すべてのNCMBクラスおよびメソッドを定義します。
*
* @class NCMB
* @param {string} apikey アプリケーションキー。必須
* @param {string} clientkey クライアントキー。必須
* @param {Object} config 通信設定。省略可能
 */
declare class NCMB {
    constructor(apikey: string, clientkey: string, config: any);
    /** @member {NCMB.UserConstructor} NCMB#User
     */
    User: NCMB.UserConstructor;
    /** @member {NCMB.RoleConstructor} NCMB#Role
     */
    Role: NCMB.RoleConstructor;
    /** @member {NCMB.File} NCMB#File
     */
    File: NCMB.File;
    /** @member {NCMB.PushConstructor} NCMB#Push
     */
    Push: NCMB.PushConstructor;
    /** @member {NCMB.InstallationConstructor} NCMB#Installation
     */
    Installation: NCMB.InstallationConstructor;
    /** @member {NCMB.ScriptConstructor} NCMB#Script
     */
    Script: NCMB.ScriptConstructor;
    /** @member {NCMB.AclConstructor} NCMB#Acl
     */
    Acl: NCMB.AclConstructor;
    /** @member {NCMB.GeoPointConstructor} NCMB#GeoPoint
     */
    GeoPoint: NCMB.GeoPointConstructor;
    /** @member {NCMB.RelationConstructor} NCMB#Relation
     */
    Relation: NCMB.RelationConstructor;
    /**
     * 指定したキーに値を設定します。
     *
     * @method NCMB#set
     * @param {string} key 値を設定したいキー
     * @param value キーに設定する値
     * @return this
     */
    set(key: string, value: any): any;
    /**
     * 指定したキー設定されている値を取得します。
     *
     * @method NCMB#get
     * @param {string} key 値を取得したいキー
     * @return this[key] keyに対応する値
     */
    get(key: string): any;
    /**
     * レスポンスシグネチャーをチェック許可を設定します。
     *
     * @method NCMB#enableResponseValidation
     * @param {boolean} value true/falseでチェック可否設定する値
     */
    enableResponseValidation(value: boolean): void;
    /**
     * レスポンスシグネチャーをチェック許可設定を取得します
     *
     * @method NCMB#getResponseValidation
     * @return sResponseValidation　レスポンスシグネチャーをチェック可否設定する値
     */
    getResponseValidation(): any;
    /**
     * @method NCMB#DataStore
     * @param {string} name
     * @returns {NCMB.DataStoreConstructor}
     */
    DataStore(name: string): NCMB.DataStoreConstructor;
}

export = NCMB;