-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2017 at 08:17 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_krb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kategori`
--

CREATE TABLE `tbl_kategori` (
  `id_tbl` int(11) NOT NULL,
  `nama_kategori` varchar(20) NOT NULL,
  `penanda_peta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_kategori`
--

INSERT INTO `tbl_kategori` (`id_tbl`, `nama_kategori`, `penanda_peta`) VALUES
(1, 'Gedung', 'gedung.png'),
(2, 'Gerbang', 'gerbang.png'),
(3, 'Jembatan', 'jembatan.png'),
(4, 'Laboratorium', 'laboratorium.png'),
(5, 'Penginapan', 'penginapan.png'),
(6, 'Museum', 'museum.png'),
(7, 'Taman', 'taman.png'),
(8, 'Masjid', 'masjid.png'),
(9, 'Toko', 'toko.png'),
(10, 'Tugu', 'tugu.png'),
(11, 'Kafe', 'kafe.png'),
(12, 'Bunga Bangkai', 'bunga_bangkai.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_peta`
--

CREATE TABLE `tbl_peta` (
  `id_tbl` int(11) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `nama_lokasi` varchar(30) NOT NULL,
  `deskripsi` text NOT NULL,
  `foto` varchar(50) NOT NULL,
  `latitude` varchar(30) NOT NULL,
  `longitude` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_peta`
--

INSERT INTO `tbl_peta` (`id_tbl`, `id_kategori`, `nama_lokasi`, `deskripsi`, `foto`, `latitude`, `longitude`) VALUES
(1, 1, 'Kantor Utama/Kantor Utara', 'Kantor utama dari Pusat Konservasi Tumbuhan Kebun Raya Bogor. Kebun Raya Bogor ini ada dibawah naungan Lembaga Ilmu Pengetahuan Indonesia (LIPI).', 'kantor_utara.jpg', '-6.599', '106.796'),
(2, 2, 'Pintu 2', 'Lokasi masuk kebun raya bogor yang terletak di samping kantor pos indonesia dan bersebrangan dengan bank BCA.', 'pintu_2.jpg', '-6.600', '106.795'),
(3, 5, 'GH Nusa Indah', 'Gedung ini dibangun pada tahun 1884 dan pada awalnya difungsikan sebagai tempat tinggal Direktur Kebun Raya Bogor. Kini, gedung tersebut digunakan sebagai wisma tamu yang bisa disewakan oleh umum. Nama Nusa indah diambil dari nama tanaman hias yang ditanam tepat di depan bangunan ini.', 'wisma_nusa_indah.jpg', '-6.603', '106.797'),
(4, 4, 'Laboratorium Treub', 'Laboraturium tua ini dibangun pada tahun 1884. Nama Treub diambil dari salah satu Direktur di Kebun Raya Bogor pada zaman pemerintahan Belanda yaitu Melchior Treub yang menjabat pada tahun 1880 hingga tahun 1910.', 'laboratorium_treub.jpg', '-6.602', '106.797'),
(5, 6, 'Museum Zoologi', 'Awal berdirinya Museum Zoologi Bogor merupakan laboratorium zoologi dengan nama Landbouw Zoologisch Laboratorium yang didirikan pada tahun 1894 gagasan dari J. C. Koningsberger ahli botani berkebangsaan Jerman. Laboratorium ini didirikan sebagai sarana penelitian yang berkaitan dengan pertanian dan zoologi.', 'museum_zoologi.jpg', '-6.603', '106.797'),
(6, 1, 'Gedung Konservasi', 'Gedung Konservasi terdiri dari 3 lantai, di lantai 3 terdapat ruang pertemuan dengan kapasitas 100 tempat duduk (Ruang A) dan 2 ruang dengan kapasitas 25 tempat duduk (Ruang B dan Ruang C) dilengkapi dengan sound system, meja dan proyektor yang sesuai dengan kegiatan seminar, workshop atau rapat. Pada lantai 1, terdapat juga Perpustakaan Kebun Raya Bogor.', 'gedung_konservasi.jpg', '-6.603', '106.798'),
(7, 9, 'Garden Shop', 'Unit koleksi khusus dan pengembangan tanaman display mempunyai tugas untuk memperbanyak tanaman-tanaman yang berpotensi hias. Hal ini adalah salah satu bentuk upaya mendukung kebijakan lembaga dalam pengembangan dan pemanfaatan tanaman yang nantinya dapat dijual ke masyarakat melalui Garden Shop Kebun Raya Bogor. Di tempat ini pengunjung dapat membeli beragam cinderamata khas kebun raya seperti gantungan kunci, T-shirt, mug, tanaman hias, serta buku koleksi tanaman di Kebun Raya Bogor.', 'garden_shop.jpg', '-6.602', '106.798'),
(8, 2, 'Pintu 1/Gerbang Utama', 'Lokasi masuk utama Kebun Raya Bogor yang terletak di samping kantor kehutanan dan berhadapan dengan pasar Bogor.', 'pintu_utama.jpg', '-6.603', '106.799'),
(9, 7, 'Taman Meksiko', 'Taman Meksiko merupakan salah satu tempat yang paling menarik di Kebun Raya Bogor. Taman yang didesain khusus untuk jenis-jenis tanaman di kawasan kering ini juga unik karena berada di Kota Bogor yang terkenal sebagai Kota Hujan. Beberapa jenis tanaman di tempat ini berasal dari Meksiko seperti Yucca, Kaktus, Agave, Euphorbia dan tanaman sukulen lainnya. Oleh sebab itu taman ini dikenal sebagai Taman meksiko.', 'taman_meksiko.jpg', '-6.602', '106.801'),
(10, 7, 'Koleksi Tanaman Air', 'Taman Air didesain sedemikian rupa sehingga tumbuhan air dapat hidup dengan baik. tanaman yang ada di taman ini seperti teratai yang berada di kolam yang ada di taman ini.', 'taman_air.jpg', '-6.601', '106.801'),
(11, 2, 'Pintu 4', 'Lokasi masuk kebun raya bogor yang berhadapan dengan kampus Pascasarjana IPB.', 'pintu_4.jpg', '-6.600', '106.805'),
(12, 11, 'Grand Garden Cafe', 'Sebuah kafe yang berada di tengah kebun raya bogor dengan pemandangan padang rumput dan pohon yang mengelilinginya. Kafe ini buka pada pukul 09.00 - 21.00 WIB.', 'grand_garden_cafe.jpg', '-6.599', '106.804'),
(13, 5, 'GH Pinus', 'Guest House Pinus dengan dikelilingi pohon pinus yang rindang dan menjulang tinggi menjadikan suasana sejuk dan nyaman. Sehingga menjadikannya populer untuk tujuan rekreasi serta untuk menghilangkan rasa penat akibat rutinitas. Wisma dengan bangunan bergaya klasik ini memiliki 4 kamar dengan tempat tidur ganda yang dilengkapi kamar mandi dalam, ruang tamu yang luas dengan televisi serta fasilitas laiinnya yang bisa memberikan kenyamanan bagaikan di rumah sendiri. Para tamu bisa memanfaatkan panorama yang indah, sejuk dan rindang di sekitarnya sebagai wahana rekreasi dan olahraga keluarga.', 'wisma_pinus.jpg', '-6.596', '106.804'),
(14, 2, 'Pintu 3', 'Lokasi masuk kebun raya bogor yang berhadapan dengan Pangrango Plaza.', 'pintu_3.jpg', '-6.596', '106.804'),
(15, 7, 'Griya Anggrek', 'Bagunan ini diresmikan oleh Presiden Indonesia yang ke-4 yaitu Ibu Megawati Sukarno Putri pada tahun 2002. Griya ini di bangun bagi pengunjung yang ingin melihat koleksi anggrek di Kebun Raya Bogor. Griya ini terdiri dari 2 sayap dan 1 ruang pusat informasi. Sayap kanan khusus untuk anggrek spesies, sedangkan sayap kiri diperuntukkan bagi anggrek hybrid.', 'griya_anggrek.jpg', '-6.595', '106.803'),
(16, 7, 'Orchidarium', 'Orchidarium adalah tempat untuk menumbuhkan bunga anggrek, sejatinya orchidarium berarti tempat atau lingkungan baik terbuka maupun tertutup untuk mengembangbiakan tanaman anggrek. Orchidarium terletak di bawah rumah anggrek dan tidak selalu terbuka untuk umum, mungkin karena belum musim panen orchidarium ini diperbolehkan dibuka. Jika rumah anggrek merupakan taman tertutup maka orchidarium adalah taman terbuka. Di sini berbagai inang atau bibit anggrek dengan bebas ditaruh di seluruh penjuru taman. Jika musim anggrek mekar maka orchidarium ini menjelma menjadi taman bunga.', 'orchidarium.jpg', '-6.595', '106.802'),
(17, 7, 'Taman Sudjana Kasan', 'Taman ini dibangun untuk mengenang Sudjana Kassan sebagai Direktur Indonesia pertama kali pada tahun 1959 hingga 1969. Di tengah-tengah taman ini, ditanam tanaman hias yang dibentuk menyerupai Burung Garuda. Oleh sebab itu taman ini disebut juga dengan taman Bhineka.', 'taman_sudjana_kasan.jpg', '-6.593', '106.801'),
(18, 8, 'Masjid', 'Masjid yang berada di dalam kebun raya bogor untuk sarana umat muslim beribadah.', 'masjid.jpg', '-6.598', '106.802'),
(19, 10, 'Tugu Reindwardt', 'Monumen ini dibangun pada 17 Mei 2006 oleh Kedutaan Jerman untuk mengenang Dr. C. G. C. Reindwardt seorang ahli tumbuhan berkebangsaan Jerman yang meresmikan Kebun Raya Bogor pada tanggal 18 Mei 1817. Reindwardt juga berperan besar terhadap pendidikan dan pertanian masayarakat Jawa dan sekitarnya.', 'tugu_reindwardt.jpg', '-6.599', '106.797'),
(20, 7, 'Taman Teijsman', 'Taman berbentuk simetris ini dibangun untuk mengenang Johannes Elias Teijsmann salah satu Kurator Kebun yang menjabat pada tahun 1830 hingga 1869. Taman ini juga disebut taman Versilles mini karena berlokasi di belakang Istana seperti taman resmi yang ada di Perancis.', 'taman_teijsman.jpg', '-6.601', '106.796'),
(21, 12, 'Bunga Bangkai', 'Tanaman ini dinamakan Bunga Bangkai karena pada saat berbunga akan mengeluarkan bau yang tidak sedap seperti bangkai. Tanaman yang unik ini memiliki tiga siklus hidup yaitu vegetative, dorman dan generative sehingga memiliki waktu berbunga setiap 3 hingga 4 tahun sekali.', 'bunga_bangkai.jpg', '-6.601', '106.797'),
(22, 12, 'Bunga Bangkai 2', 'Tanaman ini dinamakan Bunga Bangkai karena pada saat berbunga akan mengeluarkan bau yang tidak sedap seperti bangkai. Tanaman yang unik ini memiliki tiga siklus hidup yaitu vegetative, dorman dan generative sehingga memiliki waktu berbunga setiap 3 hingga 4 tahun sekali.', 'bunga_bangkai_2.jpg', '-6.598', '106.800'),
(23, 3, 'Jembatan Gantung', 'Jembatan gantung ini melintasi sungai Ciliwung yang menghubungkan dua wilayah utama di Kebun Raya Bogor. Jembatan ini dibangun pada jaman penjajahan Belanda dan memiliki bentuk menyerupai Golden Gate Bridge yang ada di San Fransisco.', 'jembatan_gantung.jpg', '-6.599', '106.801'),
(24, 3, 'Jembatan Gantung 2', 'Jembatan gantung ini melintasi sungai Ciliwung yang menghubungkan dua wilayah utama di Kebun Raya Bogor. Jembatan ini dibangun pada jaman penjajahan Belanda dan memiliki bentuk menyerupai Golden Gate Bridge yang ada di San Fransisco.', 'jembatan_gantung_2.jpg', '-6.602', '106.802'),
(25, 7, 'Lapangan Randu', 'Lapangan Randu merupakan tempat favorit bagi pengunjung yang hendak menghabiskan liburannya bersama keluarga atau teman. Kondisi lapangan yang luas dengan rumput yang hijau di segenap penjurunya, merupakan satu daya tarik tersendiri. lapangan ini digunakan untuk acara pernikahan, pemotretan, pameran dan lain lain.', 'lapangan_randu.jpg', '-6.598', '106.804'),
(26, 7, 'Lapangan Astrid', 'Lapangan Astrid merupakan tempat favorit bagi pengunjung yang hendak menghabiskan liburannya bersama keluarga atau teman. Kondisi lapangan yang luas dengan rumput yang hijau di segenap penjurunya, merupakan satu daya tarik tersendiri. lapangan ini digunakan untuk acara pernikahan, pemotretan, pameran dan lain lain. ', 'lapangan_astrid.jpg', '-6.597', '106.803'),
(27, 10, 'Tugu Lady Rafles', 'Monumen bernilai sejarah ini di dirikan oleh Letnan Gubernur Thomas Stamford Raffles untuk mengenang Istri nya Lady Olivia Mariamne yang meninggal karena penyakit malaria pada tahun 1814. Pada masa pendudukan Inggris di Indonesia, Raffles menjabat sebagai Letnan Jenderal dan tinggal di Istana Bogor pada tahun 1811 hingga 1816. Raffles juga yang memprakarsai pembuatan taman di belakang Istana Bogor yang didisain menyerupai taman-taman simetris yang ada di Inggris.', 'tugu_lady_raffles.jpg', '-6.602', '106.798'),
(28, 7, 'Herbarium', 'Tempat penelitian tanaman yang didirikan oleh Prof. Caspar Georg Karl Reinwardt. Reinidwardt adalah seseorang berkebangsaan Jerman yang berpindah ke Belanda dan menjadi ilmuwan botani dan kimia. Ia lalu diangkat menjadi menteri bidang pertanian, seni, dan ilmu pengetahuan di Jawa dan sekitarnya. Ia tertarik menyelidiki berbagai tanaman yang digunakan untuk pengobatan.', 'herbarium.jpg', '-6.596', '106.802');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_kategori`
--
ALTER TABLE `tbl_kategori`
  ADD PRIMARY KEY (`id_tbl`);

--
-- Indexes for table `tbl_peta`
--
ALTER TABLE `tbl_peta`
  ADD PRIMARY KEY (`id_tbl`),
  ADD KEY `id_group` (`id_kategori`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_kategori`
--
ALTER TABLE `tbl_kategori`
  MODIFY `id_tbl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `tbl_peta`
--
ALTER TABLE `tbl_peta`
  MODIFY `id_tbl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_peta`
--
ALTER TABLE `tbl_peta`
  ADD CONSTRAINT `tbl_peta_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `tbl_kategori` (`id_tbl`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
