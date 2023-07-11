<template>
        <!-- navbar -->
        <nav class="navbar navbar-dark navbar-expand-lg navbar-light ">
    <RouterLink to="Home" class="navbar-brand"><img src="../views/FontLayout/專題作品圖/logo.png" alt="MRT-Delicious"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav ps-2">
            <RouterLink to="Stand" class="nav-link nav-item text-white me-4" data-toggle>
                各站美食
            </RouterLink>
            <RouterLink to="/Cart" class="nav-link nav-item text-white me-4" data-toggle>
                <font-awesome-icon icon="cart-shopping" />
                購物車
                <span class="badge rounded-pill bg-danger py-2">10</span>
            </RouterLink>
            <RouterLink to="/Keep" class="nav-link nav-item text-white me-4" data-toggle>
                <font-awesome-icon icon="heart" />
                收藏
            </RouterLink>
        </div>
        </div>
    </nav>
</template>