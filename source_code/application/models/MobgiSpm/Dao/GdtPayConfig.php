<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
/**
 * Created by PhpStorm.
 * User: kyle.ke
 * Date: 2017/12/25
 * Time: 11:38
 */
class MobgiSpm_Dao_GdtPayConfigModel extends Common_Dao_Base {
    public $adapter = 'mobgiSpm';
    protected $_name = 'gdt_pay_config';
    protected $_primary = 'id';
}