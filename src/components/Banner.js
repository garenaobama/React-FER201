import '../styles/ProductBanner.css'
export default function Banner(){
    return (
        <div className='container'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="https://images.hdqwalls.com/wallpapers/nightbringer-yasuo-league-of-legends-fan-art-4k-z1.jpg" alt="First slide"></img>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://th.bing.com/th/id/OIP.WucKSJoc4p4-RnmVgGWqfQHaEX?pid=ImgDet&w=1215&h=717&rs=1" alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://preview.redd.it/tfxznv2qt1d11.jpg?auto=webp&s=43147d74a071ba035478b1a818cba2a0c360e994" alt="Third slide"></img>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    );
}