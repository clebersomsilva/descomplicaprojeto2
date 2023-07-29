<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho de compras</title>
    <link href="css/cart.css" rel="stylesheet" /> <!--resources abaixo,acrescentado no css rel="stylesheet"-->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/cart.js"></script>

</head>
<style>
    h1 {
        color: green;
    }
</style>


<body> <!-- codigo do carrinho ,pego no bbbostrap-->
    
    <div class="container bg-white rounded-top mt-5" id="zero-pad">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-10 col-12 pt-3" id="carrinho">
            <div class="d-flex">
                <div class="pt-1"><h1>Loja de camisetas </h1></div>
                <div class="ml-auto p-2"><a href="#" class="text-dark text-decoration-none" id="mobile-font">ENTRAR</a></div>
                <div class="p-2"><a href="#" class="text-dark text-decoration-none a" id="mobile-font">SAIR</a></div>                                            
            </div>
            <div class="d-flex flex-column pt-4">
                <div><h5 class="text-uppercase font-weight-normal">Produtos</h5></div>
                <div class="font-weight-normal">2 items</div>
            </div>
            <!--cabeçalho -->
            <div class="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
                <div class="px-lg-5 mr-lg-5" id="produc">CAMISETAS</div>
                <div class="px-lg-5 ml-lg-5" id="prc">PREÇO</div>
                <div class="px-lg-5 ml-lg-1" id="quantity">QUANTIDADE</div>
                <div class="px-lg-5 ml-lg-3" id="total">TOTAL</div>
            </div>
            <div id="produto0" class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                <div  class="d-flex flex-row align-items-center">
                
                    <div><img src="camiseta1.webp" width="150" height="150" alt="" id="image"></div>
                    <!--primeiro produto-->
                    <div class="d-flex flex-column pl-md-3 pl-1">
                        <div><h6>CAMISETA </h6></div>
                        <div >Descrição:<span class="pl-2">camiseta para vencedores</span></div>
                        <div>Cor:<span class="pl-3">verde,roxa,com logo branco</span></div>
                        <div>tamanho:<span class="pl-4"> P,M,G,GG</span></div>
                    </div>                    
                </div>
                <div class="pl-md-0 pl-1"><b>R$50,00</b></div>
                <div class="pl-md-0 pl-2">
                    <span class="fa fa-minus-square text-secondary" onclick="removerItem(0)">
                    </span>
                    <span class="px-md-3 px-1" id="quantidade0">0</span><!--id quantidade0 pra se ref a prouto zero-->
                    <span class="fa fa-plus-square text-secondary" onclick="adicionarItem(0)"></span>
                </div>
                <div class="pl-md-0 pl-1"><b>R$</b> <span id="total0"> </span></div><!--valor total da compra-->
                <div class="close">&times;</div>
            </div>
            <!--produto 2-->
            <div id="produto1" class="d-flex flex-row justify-content-between align-items-center pt-4 pb-3 mobile">
                <div class="d-flex flex-row align-items-center">
                    <div><img src="camiseta2.webp" width="150" height="150" alt="" id="image"></div>
                    <div class="d-flex flex-column pl-md-3 pl-1">
                        <div><h6>CAMISETA </h6></div>
                        <div >Descrição:<span class="pl-2">camiseta verde estadio</span></div>
                        <div>Cor:<span class="pl-3">verde e branca</span></div>
                        <div>tamanho:<span class="pl-4"> P,M,G,GG</span></div>
                    </div>                    
                </div>
                <div class="pl-md-0 pl-1"><b>$30</b></div>
                <div class="pl-md-0 pl-2">
                    <span class="fa fa-minus-square text-secondary" onclick="removerItem(1)"></span>
                    <span class="px-md-3 px-1" id="quantidade1">0</span><!--botao de  menos -->
                    <span class="fa fa-plus-square text-secondary" onclick="adicionarItem(1)" ></span><!--botao de +-->
                </div>
                <div class="pl-md-0 pl-1"><b>R$</b> <span id="total1"></span></div>
                <div class="close">&times;</div>
            </div>

        </div>
    </div>
</div>
<div class="container bg-light rounded-bottom py-4" id="zero-pad">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-10 col-12">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <button class="btn btn-sm bg-light border border-dark">voltar</button>
                </div>
                <div class="px-md-0 px-1" id="footer-font">
                    <b class="pl-md-4">SUBTOTAL R$ <span class="pl-md-4" id="valorTotalCompra"></span></b>
                </div>
                <div>
                    <button class="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</button>
                </div>
            </div>
        </div>
    </div>
</div>

</html>