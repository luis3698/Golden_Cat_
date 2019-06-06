<template>

  <v-layout row wrap>
        <v-flex xs12 sm6 md12  >
            <v-card-text  class="MainImage111">
                <div class="content-all">

               <div class="content-img">

            <img src="https://cdn.pixabay.com/photo/2017/04/16/19/25/soap-bubble-2235614__340.jpg">

            <div class="content-txt">
                <h2>Magtimus</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quos consectetur est eligendi, sapiente quaerat cupiditate velit, sit voluptatum repellendus perspiciatis mollitia minus totam!</p>
            </div>

            <div class="content-1"></div>
            <div class="content-2"></div>
            <div class="content-3"></div>
            <div class="content-4"></div>

        </div>
        </div>

            </v-card-text>

        </v-flex>
      </v-layout>

</template>
<style>

.content-all{
    width: 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.content-img{
    width: 600px;
    height: 400px;
    margin: auto;
    margin-top: 100px;
    position: relative;
    overflow: hidden;
}

.content-img img{
    width: 100%;
    -webkit-transition: all 300ms;
    transition: all 300ms;
}

.content-1{
    width: 1000px;
    height: 1000px;
    position: absolute;
    top: 0;
    background: rgba(0,100,255,0.5);
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
    margin-left: -750px;
    -webkit-transition: all 300ms;
    transition: all 300ms;
}

.content-2{
    width: 1000px;
    height: 1000px;
    position: absolute;
    top: 0;
    background: rgba(0,100,255,0.5);
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
    margin-left: -800px;
    -webkit-transition: all 500ms;
    transition: all 500ms;
}

.content-3{
    width: 1000px;
    height: 1000px;
    position: absolute;
    top: 0;
    background: rgba(0,100,255,0.5);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    margin-left: -800px;
    margin-top: -500px;
    -webkit-transition: all 900ms;
    transition: all 900ms;
    -webkit-box-shadow: 0px 1px 20px -5px black;
    box-shadow: 0px 1px 20px -5px black;
}

.content-4{
    width: 1000px;
    height: 1000px;
    position: absolute;
    top: 0;
    background: rgba(0,100,255,0.5);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    margin-left: -850px;
    margin-top: -500px;
    -webkit-transition: all 700ms;
    transition: all 700ms;
}

.content-img:hover .content-1{
    width: 222%;
    -webkit-transition: all 900ms;
    transition: all 900ms;
}

.content-img:hover .content-2{
    width: 222%;
    -webkit-transition: all 300ms;
    transition: all 300ms;
}

.content-img:hover .content-3{
    width: 222%;
    -webkit-transition: all 500ms;
    transition: all 500ms;
}

.content-img:hover .content-4{
    width: 222%;
    -webkit-transition: all 700ms;
    transition: all 700ms;
}

.content-img:hover img{
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-transition: all 300ms;
    transition: all 300ms;
    opacity: 0.8;
}

.content-txt{
    position: absolute;
    top: 0;
    width: 400px;
    padding: 10px;
    z-index: 10;
    color: white;
    text-align: center;
    margin-top: 100px;
}

.content-txt h2{
    font-size: 30px;
    opacity: 0;
    -webkit-transform: scale(0.2);
    transform: scale(0.2);
    -webkit-transition: all 300ms;
    transition: all 300ms;
}

.content-txt p{
    font-size: 20px;
    margin-top: 10px;
    opacity: 0;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-transition: all 300ms;
    transition: all 300ms;
}

.content-img:hover h2{
    opacity: 1;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    -webkit-transform: scale(1);
    transform: scale(1);
}

.content-img:hover p{
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 500ms;
    transition: all 500ms;
}
.MainImage111{
   width: 10px;

}

</style>
