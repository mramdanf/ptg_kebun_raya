<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Utility
{
	private $CI;

	const PICKUP = "Pickup";
	const SHIFT_1 = "Shift Satu";
	const SHIFT_2 = "Shift Dua";
	const SUCCESS = "success";
	const FAILED = "failed";

	function __construct()
	{
		$this->CI =& get_instance();
	}

	/*
		print array to error log
		@params: array $data array to print
	*/
	function plog($data)
	{
		log_message('error', print_r($data, TRUE));
	}

	/*
		set_flash_data for alert
		flag: indicate type of alert
	*/
	function set_flash($flag = "", $msg)
	{
		if($flag != "")
		{
			if($flag == SELF::SUCCESS)
			{
				$this->CI->session->set_flashdata(
				    'alert', 
				    array(
				        'msg'=>$msg,
				        'type'=>'alert-success'
				    )
				);
			} else
			{
				$this->CI->session->set_flashdata(
				    'alert', 
				    array(
				        'msg'=>$msg,
				        'type'=>'alert-danger'
				    )
				);
			}
		}
	}

}