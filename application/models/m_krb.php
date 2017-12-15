<?php
class M_krb extends CI_Model{
	
	function __construct(){
		parent::__construct();
	}
	
	function getAllContent() {
		$query=$this->db->query("select a.id_tbl, nama_lokasi, nama_lokasi, deskripsi, foto, latitude, longitude, b.penanda_peta from tbl_peta as a INNER JOIN tbl_kategori as b ON a.id_kategori = b.id_tbl");
		return $query;
	}
}
?>