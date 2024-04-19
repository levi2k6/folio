<template>
    <div class="headerBox1"> 

      <div class="navpage">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link>
        <router-link to="/contacts" class="nav-link">Contacts</router-link>
        <router-link to="/more" class="nav-link">More</router-link>
      </div>

    </div>
</template>

<style scoped>
.headerBox1{
    
    background:  rgb(14, 11, 31);
    width: 100%;
    height: 100px;
    display:flex;
    align-items: center;
}

.navpage {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width: 500px;
}

/* Style the links */
.nav-link {
    color: white; /* Change the color to your desired color */
    text-decoration: none; /* Remove underline */
}

/* Style the links on hover */
.nav-link:hover {
    color: rgb(255, 146, 113); /* Change color on hover */
}
</style>
