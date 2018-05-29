<?php

/**
 * @Encoding      :   UTF-8
 * @Author       :   hunter.fang
 * @Email         :   782802112@qq.com
 * @Time          :   2017-5-25 19:54:16
 * $Id: AppkeyConfig.php 62100 2017-5-25 19:54:16Z hunter.fang $
 */

if (!defined('BASE_PATH')) exit('Access Denied!');

class Advertiser_Service_AppkeyConfigModel {

    /**
     *
     * Enter description here ...
     */
    public static function getAll() {
        return array(self::_getDao()->count(), self::_getDao()->getAll());
    }


    public static function getSearchByPageLeftJoin($table, $on, $page = 1, $limit = 10, $sqlWhere = 1, $orderBy = array(), $field = '*') {
        if ($page < 1) $page = 1;
        $start = ($page - 1) * $limit;
        $ret = self::_getDao()->searchByLeftJoin($table, $on, $start, $limit, $sqlWhere, $orderBy, $field);
        $total = self::_getDao()->searchCountLeftJoin($table, $on, $sqlWhere);
        return array($total, $ret);

    }


    public static function getAppList($page = 1, $limit = 10, $params = array(), $orderBy = array()) {
        if ($page < 1) $page = 1;
        $start = ($page - 1) * $limit;
        $ret = self::_getDao()->getAppList($start, $limit, $params, $orderBy);
        $total = self::_getDao()->getAppListCount($params);
        return array($total, $ret);

    }
    /**
     * 获取
     * @param type $params
     * @return type
     */
    public static function getAppListCount($params){
        $total = self::_getDao()->getAppListCount($params);
        return $total;
    }

    public static function getCountBy($params) {
        $total = self::_getDao()->count($params);
        return intval($total);
    }

    /**
     *
     * Enter description here ...
     * @param unknown_type $params
     * @param unknown_type $page
     * @param unknown_type $limit
     */
    public static function getList($page = 1, $limit = 10, $params = array(), $orderBy = array()) {
        if ($page < 1) $page = 1;
        $start = ($page - 1) * $limit;
        $ret = self::_getDao()->getList($start, $limit, $params, $orderBy);
        $total = self::_getDao()->count($params);
        return array($total, $ret);
    }

    /**
     *
     * 查询一条结果集
     * @param array $search
     */
    public static function getBy($search) {
        return self::_getDao()->getBy($search);
    }

    /**
     *
     * Enter description here ...
     * @param unknown_type $id
     */
    public static function getsBy($params, $orderBy = array('id' => 'ASC')) {
        if (!is_array($params)) return false;
        return self::_getDao()->getsBy($params, $orderBy);
    }

    /**
     *
     * Enter description here ...
     * @param unknown_type $data
     * @param unknown_type $id
     */
    public static function update($data, $id) {
        if (!is_array($data)) return false;
        $data['update_time'] = Common::getTime();
        $data = self::_cookData($data);
        return self::_getDao()->update($data, intval($id));
    }

    public static function updateBy($data, $params) {
        if (!is_array($data) || !is_array($params)) return false;
        $data['update_time'] = Common::getTime();
        $data = self::_cookData($data);
        return self::_getDao()->updateBy($data, $params);
    }
    
    /**
     *
     * Enter description here ...
     * @param unknown_type $id
     */
    public static function delete($id) {
        return self::_getDao()->delete(intval($id));
    }

    /*
     *
     * @param array $param
     * @return boolean
     */
    public static function deleteBy($search) {
        return self::_getDao()->deleteBy($search);
    }

    /**
     *
     * Enter description here ...
     * @param unknown_type $data
     */
    public static function add($data) {
        if (!is_array($data)) return false;
        $data = self::_cookData($data);
        $data['create_time'] = Common::getTime();
        $data['update_time'] = Common::getTime();
        $ret = self::_getDao()->insert($data);
        if (!$ret) return $ret;
        return self::_getDao()->getLastInsertId();
    }


    /**
     *
     * @param unknown_type $data
     * @return boolean
     */
    public static function mutiFieldInsert($data) {
        if (!is_array($data)) return false;
        return self::_getDao()->mutiFieldInsert($data);
    }


    /**
     *
     * Enter description here ...
     * @param unknown_type $data
     */
    private static function _cookData($data) {
        $tmp = array();
        if (isset($data['app_key'])) $tmp['app_key'] = $data['app_key'];
        if (isset($data['app_name'])) $tmp['app_name'] = $data['app_name'];
        if (isset($data['appkey_config_id'])) $tmp['appkey_config_id'] = $data['appkey_config_id'];
        if (isset($data['policy_config_id'])) $tmp['policy_config_id'] = $data['policy_config_id'];
        if (isset($data['create_time'])) $tmp['create_time'] = $data['create_time'];
        if (isset($data['update_time'])) $tmp['update_time'] = $data['update_time'];
        if (isset($data['del'])) $tmp['del'] = $data['del'];
        return $tmp;
    }

//    获取关联关系
    public static function getRelationOfAppkey($param) {
        $list = self::_getDao()->getsBy($param);
        $relations = [];
        foreach ($list as $item) {
            $relations['originality_conf']['app_key'][$item['originality_id']][] = $item['app_key'];
        }
        foreach ($relations as $primaryKey => $relation) {
            foreach ($relation as $subKey => $subRelation) {
                foreach ($subRelation as $item => $value) {
                    $relations[$primaryKey][$subKey][$item] = array_values(array_unique($value));
                }
            }
        }
        return $relations;
    }


//    获取创意关联的所有appkey
    public static function getAppKey($params = array()) {
        $list = self::_getDao()->getsBy($params);
        $appkeys = [];
        foreach ($list as $item) {
            $appkeys[$item['app_key']] = $item['app_name'];
        }
        return $appkeys;
    }

    /**
     * 根据app_key获取下发配置id
     * @param type $appkey
     * @return boolean
     */
    public static function getAppkeyconfigidByappkey($appkey){
        if(empty($appkey)){
            return false;
        }
        $result = self::_getDao()->getBy(array('app_key'=>$appkey, 'del'=>Common_Service_Const::NOT_DELETE_FLAG), array('id'=>'asc'));
        if($result){
            return $result['appkey_config_id'];
        }
        return false;
    }



    /**
     *
     * @return Advertiser_Dao_AppkeyConfigModel
     */
    private static function _getDao() {
        return Common::getDao("Advertiser_Dao_AppkeyConfigModel");
    }

    public static function getFields($field = '*', $where = null) {
        return self::_getDao()->getFields($field, $where);
    }
}

