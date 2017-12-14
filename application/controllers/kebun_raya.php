<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kebun_raya extends CI_Controller {
	
	function __construct(){
		parent::__construct();
		$this->load->model('m_krb');
	}

	public function index() {
		$this->load->view('kebun_raya');
	}
	
	public function getAllContent() {
		$data['data']=$this->m_krb->getAllContent()->result();
		echo json_encode($data['data']);
	}

}

/* End of file kebun_raya.php */
/* Location: ./application/controllers/kebun_raya.php */