<script setup>
import { defineProps, onMounted } from 'vue';
import {
  Head,
  Link,
} from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import NavLink from '@/Components/NavLink.vue';
import { onKonamiCode } from '@/utils/konami';

defineProps({
  canLogin: {
    type: Boolean,
  },
  canRegister: {
    type: Boolean,
  },
  laravelVersion: {
    type: String,
    required: true,
  },
  phpVersion: {
    type: String,
    required: true,
  },
  currentTime: {
    type: String,
    required: true,
  },
  currentDate: {
    type: String,
    required: true,
  },
});

onKonamiCode(() => {
  console.log('You found the Konami Code!');
});


// 
</script>

<template>
  <div>
    <div class="flex">
      <!-- Logo -->
      <div class="shrink-0 flex items-center">
        <Link :href="route('dashboard')">
        <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800" />
        </Link>
      </div>

      <!-- 
        make glass navbar using tailwindcss
       -->
      <div class="fixed  backdrop-filter backdrop-blur-[5px]  border-gray-100 w-full h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
          <NavLink :href="route('home')" :active="route().current('home')">
            Home
          </NavLink>

          <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
            Dashboard
          </NavLink>
        </div>
      </div>

      <div class="p-20 bg-slate-900 bg-gradient-to-b from-slate-700 to-transparent ">
        <h1 class="text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">

          Hero
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dicta nulla fugiat similique, cupiditate vero distinctio placeat enim iste porro optio! Quas totam, quae voluptatibus suscipit sequi odio ad optio? Placeat ad pariatur necessitatibus sunt perferendis aspernatur eveniet iusto illum. Sequi quam accusantium quas, voluptatum facere assumenda eligendi inventore maiores. Porro eius mollitia sunt corrupti natus, accusantium necessitatibus quam minima repellat nisi? Dignissimos quo ipsam adipisci commodi debitis odio fuga, consequatur aliquid at possimus omnis minima! Officia possimus asperiores dolor itaque mollitia rem commodi quod atque accusamus. Dolorum architecto repellendus animi laboriosam nobis aspernatur dicta. Nisi repellendus saepe ab voluptates ducimus magni, laboriosam accusantium animi in, quo molestiae consectetur hic magnam ratione, eos exercitationem explicabo blanditiis porro dicta deleniti voluptatibus perferendis neque quae expedita? Labore doloribus aliquid ad assumenda, vel aperiam ab dignissimos eum ex, ipsam impedit consequatur aliquam, perferendis cupiditate sequi et in perspiciatis suscipit. Cum, corrupti nobis eaque consequatur numquam quibusdam libero quos similique incidunt suscipit temporibus modi, sint ad, maiores facere molestias tempore nostrum at iure ducimus neque quas? Magni recusandae numquam nesciunt doloribus sapiente ullam modi molestiae voluptatibus possimus aut unde omnis aliquam ipsum laudantium saepe odio debitis, voluptate, adipisci molestias ab. Iusto quae quia, repellendus perspiciatis molestiae atque error incidunt ratione rerum at eius eaque modi provident illo deserunt esse quos eligendi! Porro, obcaecati odit delectus perferendis consectetur officiis aperiam aut, dignissimos doloribus ab unde quae aspernatur sint nostrum? Omnis ad obcaecati, molestiae blanditiis, ipsum voluptates alias magnam eum molestias praesentium at excepturi quo beatae ea voluptatum nemo libero corporis fuga dicta nobis in et nesciunt porro! Labore natus sint doloribus asperiores dolorem, quidem vel at sunt incidunt quam numquam. Asperiores rerum quia iste itaque officiis accusantium minima voluptates aspernatur, rem unde cupiditate delectus commodi porro? Nemo, quas minima. Ullam voluptatum repudiandae quo ut qui maiores corrupti fugiat! Sequi et accusamus, fugiat incidunt exercitationem ab delectus animi tempore vitae vel debitis sapiente, repellendus veritatis excepturi nemo voluptatum! Alias, eligendi nihil atque perferendis doloribus praesentium minus a asperiores laudantium enim assumenda, illum qui blanditiis libero. Eligendi reprehenderit voluptate libero suscipit excepturi accusamus expedita quae. Mollitia eius, omnis quisquam, excepturi maxime dignissimos nobis quis fugiat recusandae numquam nihil aliquam explicabo cumque blanditiis animi reiciendis voluptas veritatis nam eaque quibusdam illo. Ex placeat doloremque fugiat magnam aperiam corporis dolorum libero. Qui vero illum deserunt deleniti magni nisi, voluptatum beatae, nam, in aperiam velit autem amet atque modi harum ipsam. Ad tempora, harum accusantium quas, blanditiis modi obcaecati ipsa similique provident atque beatae iusto rem suscipit. Doloribus nulla quibusdam quisquam hic mollitia, quos unde maiores eos neque ex earum porro perferendis repellat necessitatibus quaerat vero corporis! Magni ex repellendus repellat assumenda soluta dolorem quas? Labore quis eos soluta ipsum nam, magni velit eius, accusantium cum dignissimos facilis incidunt inventore tempora quae laboriosam obcaecati vel asperiores. Obcaecati nam odit est aperiam et perferendis eligendi molestiae fuga. Quaerat nostrum quas qui alias vero nam consectetur unde, laboriosam velit nesciunt quam rem reiciendis quia voluptatem, iusto provident quasi possimus. Expedita, porro ipsa?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius totam maiores inventore atque corporis necessitatibus natus nostrum ipsa nam, reiciendis nihil animi maxime optio, voluptatem illum magni voluptates fugit suscipit eum, deserunt odit ea veniam! Sint repellendus, fuga ducimus impedit maxime itaque deserunt beatae quae reiciendis dignissimos. Voluptas ratione quas dolorem perspiciatis impedit, obcaecati, itaque reprehenderit similique excepturi repellat quia sunt fugiat nesciunt dicta doloribus aliquam? Explicabo pariatur ipsa repellat veniam dignissimos error id animi velit similique deleniti illum, veritatis quia quae libero recusandae. Ut vitae, sint nam ducimus doloremque a veritatis totam. Ab numquam reprehenderit natus magnam quasi quo fugiat fugit nobis accusantium qui, minus asperiores nemo molestias reiciendis repudiandae, excepturi obcaecati odio? Dignissimos consequuntur placeat, qui, aut enim velit molestias obcaecati ratione delectus maiores odio cumque maxime accusantium porro nobis non voluptatibus, doloribus praesentium soluta ad illo esse modi ipsa. Ipsa, quisquam quis? Illum rem debitis facere nostrum, ea quod consequuntur repellendus qui cum, nam itaque maxime voluptatibus nemo, doloremque sunt delectus voluptate provident fugiat architecto cumque aspernatur! Neque, vero. Iusto excepturi eveniet expedita accusantium alias, perferendis necessitatibus odit nisi sapiente id eaque assumenda beatae odio dolorem voluptates placeat provident et iste sunt. Blanditiis doloremque architecto omnis facilis, ex repellendus natus! Numquam possimus ex quia quisquam porro architecto nemo est soluta quae repudiandae! Velit assumenda quia veritatis, laborum obcaecati tempora dicta exercitationem dolorum iusto deserunt, autem voluptas debitis quaerat corrupti voluptatibus voluptatem quo officia impedit sapiente, sed numquam deleniti sit nemo? Inventore cumque rem laboriosam magni amet consectetur, assumenda repellat! Veritatis debitis alias nisi eum dignissimos, magni nobis est illo voluptate at exercitationem maiores, suscipit consequatur, error impedit sed ea totam enim qui doloribus necessitatibus animi sunt. Quasi illo, iure quidem ratione amet animi reiciendis sit quisquam, iusto qui, at voluptatibus nobis et aut dolorum. Aliquid iure, praesentium eligendi maiores deserunt eum voluptate recusandae iste quasi non repudiandae eius aspernatur fugit voluptas minus at! Cupiditate quia, impedit placeat expedita corporis tempora vitae aliquid veritatis earum? Voluptatem magnam consectetur accusantium. Est maxime accusantium nostrum vero incidunt rem magni enim facere aliquid ut officia, voluptates temporibus repudiandae similique veniam sint eum, adipisci harum ab, doloribus animi nam quas inventore. Eum praesentium numquam nam voluptatem ad suscipit cupiditate dolorem quisquam eos! Delectus quidem iure ducimus nemo ex. Tempore hic earum dolore dolores maiores possimus rerum suscipit numquam accusantium magni repellat ratione maxime, blanditiis, vero animi porro quas ipsum beatae itaque minus dolor soluta! Consequatur dignissimos voluptatum placeat maiores amet inventore, fugit sed? Cum, asperiores! Laborum nobis cupiditate iste enim consectetur, pariatur, ullam doloribus, accusamus quibusdam tempora ipsa numquam ducimus maxime. Deserunt nesciunt ut voluptatem laborum, sed, perferendis error facilis, voluptates voluptatibus sit aliquid possimus similique! Laudantium impedit expedita minima eaque libero odit exercitationem, amet, soluta odio accusantium blanditiis quasi sequi veniam consequuntur explicabo. Temporibus beatae hic aliquid accusamus recusandae molestias soluta quod incidunt! Aliquam amet illo, suscipit, dignissimos pariatur praesentium quod aspernatur ex nisi sit atque cumque accusamus iure, ad animi? Dolorem consequuntur quae voluptate veniam similique magnam odit aut commodi!
        </p>
      </div>

      <!-- Navigation Links -->

    </div>








  </div>
</template>



<style scoped></style>