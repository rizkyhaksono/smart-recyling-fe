import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar, Dropdown } from "antd";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/user/profile">
        Profile
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Logout
      </a>
    ),
  },
];

export default function DashboardAdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="bg-white">
        <Link to={"#"} className="flex justify-center mx-auto p-3">
          <img src="/logo.png" className="h-8 mr-3" alt="Smart Recycling Logo" />
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Manage Users",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Reports",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Exchange",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} />
          <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ab velit aut eius facere reiciendis fugiat iusto, facilis tempora nostrum. Magni illum corrupti officia id perferendis, porro minima voluptates iure iste non, maxime
          similique quibusdam repellendus quidem itaque, alias inventore? Est nostrum voluptate veritatis eum ipsa provident reiciendis accusamus laudantium? Est excepturi aut optio veritatis molestias praesentium consequuntur perferendis
          repellat nemo placeat ratione qui expedita mollitia ullam porro vitae exercitationem accusantium, non amet fugiat doloremque deserunt quae vel inventore! Illo labore eveniet magni sint reiciendis iusto ab repellat fugit, atque
          maxime eos, rem quis nulla hic blanditiis ratione eaque natus fugiat nemo. A explicabo tempora odio voluptate, repellat vitae esse necessitatibus earum. Exercitationem ad libero optio nisi assumenda, autem quas! Nulla nobis
          deleniti reiciendis deserunt ex sequi earum laboriosam rem natus harum. Quis error blanditiis voluptate aliquam consectetur veritatis dolorem est facilis debitis enim recusandae cupiditate porro sed, animi ea tenetur quos possimus
          ipsa sunt magni rem veniam corrupti quam? Excepturi eaque reprehenderit vero rerum porro non officiis sint. Quidem commodi officiis inventore, quasi quia perspiciatis placeat dolores ratione! Architecto, deleniti harum! Neque,
          praesentium! Veritatis corrupti earum rerum fugit sapiente voluptas, obcaecati aliquid tempore explicabo eveniet itaque, ipsum enim, doloribus eum iste corporis. Unde vero sit quod neque possimus natus similique debitis iure
          consequuntur aliquid! Sapiente recusandae vel esse ullam blanditiis commodi obcaecati asperiores non earum at sed, vitae, consectetur alias perferendis ex, iure vero necessitatibus voluptas facere eaque beatae nulla! Reprehenderit
          officia sapiente perspiciatis libero aut exercitationem aliquid modi quisquam odio. Eius doloremque, consequatur fuga sed officiis dicta alias illo voluptatem molestias pariatur dignissimos voluptates architecto et nobis assumenda
          sapiente deserunt facere tempora earum aut sit? Quas dolor odit nobis libero atque laboriosam esse ipsum, magni nisi molestiae ducimus sit possimus iste impedit voluptates expedita quisquam. Repellat, necessitatibus porro fugit
          molestias sapiente voluptates, soluta velit autem harum dolor corporis error aliquam quibusdam quos distinctio praesentium voluptatem illo assumenda delectus dicta unde explicabo adipisci eaque? Autem, provident accusantium
          molestias nulla maiores necessitatibus eveniet cumque odio fuga, dignissimos commodi explicabo quibusdam, repellendus voluptatum illum. Quae iusto sequi fuga fugiat saepe omnis hic eos, nobis obcaecati corporis sint voluptate
          error corrupti! Odit quos omnis commodi in, nisi deleniti, velit itaque officia earum suscipit beatae? Aliquam alias, natus debitis possimus, doloremque nemo provident non, delectus id vero deserunt doloribus reiciendis
          accusantium! Laudantium pariatur nihil eveniet hic quos deserunt, dolorum rem iste delectus, eligendi nobis consequatur dolorem facere necessitatibus ad. Nulla, recusandae optio neque temporibus accusantium totam illo quasi quis,
          dolore, aliquam odit! Impedit sunt exercitationem quos repellendus inventore hic, provident iste tempora maxime cum at consequuntur vero possimus neque deleniti corrupti culpa voluptatem delectus facere dolorem minima veniam
          libero? Similique, sint itaque. Ducimus temporibus sed architecto cupiditate mollitia quibusdam similique consequatur, officia aperiam neque reiciendis dolorem? Doloribus repellendus fuga voluptatem accusamus iste ducimus, sit
          officia dolorum incidunt hic sint eum velit error quidem illo atque. Accusantium earum iure pariatur corrupti deserunt veritatis iste odit obcaecati molestias cum? Perferendis qui unde sapiente debitis vel, repellendus autem modi
          voluptate, labore, molestias fugit dignissimos dolorum adipisci harum! Odio quibusdam cupiditate eveniet fugit sapiente obcaecati, saepe amet officia ullam temporibus quaerat id unde voluptatum vitae, tempora eaque consectetur
          eius modi quae debitis quasi atque minus. Fuga, nobis? Dolores, voluptate omnis! Ducimus laboriosam iure eaque autem et culpa optio vitae omnis rerum accusamus ratione tenetur soluta aliquid atque at iusto fuga debitis, rem ab, id
          ipsum illo! Id suscipit tempora dicta assumenda repellendus laudantium, nisi eius sunt magni quos repudiandae molestias asperiores, consequuntur, ex natus eum ab aut perspiciatis. Totam eligendi nesciunt excepturi quod sit quos
          impedit suscipit necessitatibus sint corrupti deserunt, officia quidem architecto, error enim distinctio aliquid dolorem quaerat adipisci qui ex? Repellat fuga, aliquam molestiae consequatur aperiam libero odit maiores quo
          similique itaque nesciunt officia quos dolorem id voluptates nihil, voluptas tenetur dolorum non illum qui repudiandae porro. Unde, sapiente, debitis quas recusandae quae soluta eligendi, sequi ipsa veritatis aut sint hic quam.
          Esse expedita eum sed at cumque quas aperiam excepturi voluptatem unde error similique veniam reprehenderit fuga illum quos neque molestiae tempora maxime, corporis molestias! Harum omnis debitis a fugiat nulla ex sed animi minima
          provident magni ipsam eaque, architecto possimus temporibus, illo tempore quidem aspernatur rerum commodi, quod ut molestiae ad laudantium. Vitae quaerat aliquam exercitationem obcaecati reiciendis nemo! Cumque, enim dignissimos.
          In fugit repellat quisquam placeat quasi inventore laborum illo excepturi neque aperiam nulla at, qui dolore quia maiores, non ullam sequi facere sapiente est culpa voluptate perferendis. Dolores nostrum, eveniet vero doloribus
          mollitia magnam nulla amet veritatis dolore sunt eos blanditiis non dignissimos earum quam, officia odio. Ratione qui repellat iste, doloribus incidunt velit accusantium nostrum debitis ipsum aperiam fugit architecto ullam quas
          quos reiciendis necessitatibus corrupti. Maxime quidem earum expedita aliquid numquam natus tenetur aspernatur, minima tempora modi rerum, libero sequi aut eveniet aliquam. Molestiae magnam voluptate ex doloribus voluptatibus,
          nisi voluptates error velit dolor, magni ipsum tempore incidunt voluptatum, vitae cumque odio autem. Nostrum explicabo ullam beatae temporibus natus officia molestias aut fugiat accusamus quam rem alias reiciendis, eveniet et
          deleniti inventore provident sint deserunt error similique rerum praesentium! Quo autem dolorem quos rerum ut tempora sapiente rem placeat nihil non et aliquid officia repellat officiis, temporibus dignissimos, illum sint
          praesentium cum? Hic amet quos accusantium quaerat minima tempora inventore et reprehenderit, harum dolorum tempore at, odio fugiat ex illo, eius porro? Quod officia quaerat aperiam similique dignissimos doloremque, veniam natus
          esse nemo, laborum mollitia adipisci, corrupti autem molestias a sed asperiores iusto ullam consequuntur. Dicta, voluptates unde ipsa in temporibus id corrupti nostrum praesentium iste cumque, perspiciatis est tempora aliquid
          pariatur! Quidem harum laborum consectetur temporibus earum totam consequatur accusamus cum atque voluptate, magnam sunt iure. Tempore reprehenderit eum placeat enim eos odit, numquam, maxime rerum, vero aliquam voluptatibus?
          Magni consectetur tempore soluta architecto minus molestiae aperiam eligendi, repellat autem fuga. Fugiat voluptas corrupti minus cumque recusandae totam eos officia molestiae minima blanditiis pariatur fuga excepturi, nulla
          doloribus cum. Recusandae molestiae distinctio obcaecati, quisquam qui illo! Pariatur sit nesciunt sequi obcaecati repudiandae optio nihil veritatis, quaerat vero debitis esse laborum, necessitatibus at voluptates deserunt ad
          praesentium ipsum nisi rem autem, dolore harum. In accusantium modi magni officiis id consequatur, sed ab suscipit itaque eum vel dolorem explicabo fuga corrupti! Placeat voluptatum officiis nostrum obcaecati neque dicta sed hic,
          deleniti illum deserunt architecto, temporibus nam iusto tempore! Alias tempora impedit, reprehenderit expedita dicta, quia deserunt repellat minima ratione ab cumque totam. Voluptatum et, ipsum quis excepturi delectus eligendi
          eum non, cupiditate deserunt, velit maiores. Ab minus voluptate officia modi tempora dolorum nostrum voluptatibus iure sed officiis maiores iusto reprehenderit laudantium tempore optio facilis voluptates ipsa deleniti soluta,
          magni magnam reiciendis! Tempora, maxime autem possimus porro iusto cupiditate id, magni quis quia dignissimos quas, eveniet suscipit. Perferendis quos eaque molestias aliquid nulla dolorem distinctio recusandae provident,
          architecto magnam, inventore rerum, doloremque libero asperiores a error. Consectetur nesciunt eum nisi dolorem animi ducimus obcaecati magnam minima quasi? Harum porro pariatur molestiae corrupti impedit commodi accusamus vitae,
          possimus dicta, quisquam dignissimos cum deserunt sunt explicabo enim ipsa natus aut sapiente praesentium magnam, corporis nulla nam vero. Exercitationem placeat perspiciatis perferendis pariatur voluptatibus asperiores suscipit
          necessitatibus, a mollitia aperiam libero veritatis voluptas cupiditate vero iusto ratione. Optio nisi perspiciatis aliquid libero, laboriosam consequatur accusamus praesentium nesciunt id in, obcaecati quasi similique expedita
          deleniti amet vel iure sapiente aperiam tempore ex consequuntur. Atque veniam eveniet eos distinctio, corrupti unde incidunt earum ex excepturi dolore beatae, sed suscipit corporis eaque consectetur nemo vel laboriosam nihil,
          doloremque modi voluptatibus alias. Aspernatur, amet exercitationem? Nesciunt est debitis, cumque sed veritatis aliquid! Nesciunt atque neque inventore, optio, corrupti quaerat nostrum alias officia recusandae aliquid, odio fugiat
          quo? Laudantium ea iste et laboriosam tempora recusandae excepturi, vitae, ratione porro eveniet nisi molestiae magni illo odio quibusdam? Nihil ullam nisi non ab corporis, eligendi libero voluptate sit deserunt possimus rerum quo
          labore cupiditate atque, animi odit quis voluptatibus placeat! Eius, illo ea rerum placeat quod eum magnam, error neque consectetur id vitae. Rem itaque unde quas laudantium quasi facere quidem officiis at voluptas! Possimus
          placeat, alias dolores enim ad quibusdam repellendus aspernatur minus, iure, in consequuntur quod unde repudiandae! Numquam inventore adipisci tempore repudiandae dolore qui expedita distinctio ut corporis nemo minima neque et
          esse eligendi magnam necessitatibus placeat modi voluptatum dolorum mollitia, aspernatur a explicabo enim? Asperiores, dicta fugit. Id temporibus possimus mollitia aliquam harum inventore, necessitatibus, fuga repellat accusantium
          iste, a eligendi ratione consectetur soluta voluptatem! Dolor, nam veniam reiciendis assumenda facere, et ipsa facilis voluptatibus magni ab expedita a ex laudantium provident perspiciatis, rem placeat architecto! Eum quasi
          voluptatibus ad alias? Cumque possimus, aperiam facere hic temporibus enim doloremque tempora laborum sequi suscipit officiis saepe illo repellat exercitationem quae, praesentium placeat recusandae inventore voluptatum, labore
          deserunt magnam. Magni iusto obcaecati atque, corrupti sapiente labore nulla repudiandae ea provident! Ad, impedit officiis nulla ullam ducimus quidem eos necessitatibus nesciunt nemo, architecto nam similique, distinctio maxime.
          Eos minus, tenetur assumenda, reprehenderit fugiat possimus ipsum maiores qui odit nisi vero similique, quisquam voluptatum dolorem asperiores vel doloribus earum aliquid debitis alias aut! Ea magnam consequuntur quasi alias cum
          veritatis placeat libero, dolores beatae blanditiis debitis deleniti nulla? Magni ipsa recusandae aspernatur perferendis hic. Impedit cupiditate aliquam natus sit perferendis earum perspiciatis ratione quisquam, ex eligendi
          incidunt, totam corrupti a laborum modi officia. Laboriosam, velit impedit deleniti veniam esse hic magni accusamus officia, optio eveniet odit perferendis animi aspernatur quibusdam quae tempore quia omnis soluta est itaque
          voluptatem expedita iusto quod! Tenetur porro eveniet eaque quae voluptas enim voluptatum. Minus debitis ex iure nam perspiciatis quaerat quis neque ea deserunt, quia earum laudantium dignissimos? Fuga harum exercitationem labore
          quaerat ducimus aliquid alias, perspiciatis velit dolores assumenda reprehenderit, quia suscipit accusamus quod eos iste omnis rerum ratione, temporibus voluptates eveniet dolorum quasi ipsa neque. Perspiciatis non consectetur
          nemo officiis dolores nam ea nobis sunt rem eius ipsa commodi id iure accusantium saepe dolorum sapiente ex, iste, unde in similique! Qui quam deleniti officiis! Officia quo sunt omnis itaque corporis non sed dolorem incidunt
          porro dolores deleniti voluptatum velit, asperiores adipisci, reiciendis voluptas sapiente? Illum, sint eligendi ea voluptatem fuga iure pariatur optio quam cupiditate assumenda id quasi, numquam animi eum architecto? Porro ipsam,
          eveniet perspiciatis fugit voluptates sunt laudantium enim. Voluptate, cupiditate saepe ratione porro beatae facilis ipsam illum at molestiae totam quasi labore nisi a amet, tenetur maiores magnam deleniti perspiciatis quibusdam
          quod, officiis neque veniam cumque obcaecati. Sed, repellat error ipsum autem dolor necessitatibus possimus facere facilis itaque animi quidem expedita provident adipisci, at maxime est, vero corporis reprehenderit enim veniam
          illo sapiente neque. Repudiandae consequuntur alias ea, architecto cum minus? Asperiores eum sunt aspernatur accusamus omnis nisi quas vitae, assumenda voluptates, ab veritatis sint incidunt maxime numquam, temporibus consectetur
          quisquam qui debitis deleniti. Quibusdam nulla necessitatibus provident enim, rerum libero et voluptatem nemo, laudantium, mollitia adipisci nihil sint architecto deleniti explicabo eum. Voluptatem enim alias at, sapiente facere
          maxime pariatur assumenda ut ea quam ab aut, facilis sunt ullam laborum dolore libero repudiandae temporibus fuga deserunt distinctio molestias natus beatae neque? Quasi natus veniam consectetur quia deserunt, dolores excepturi
          sit animi ad voluptatibus. Dolore culpa dicta repellat esse eum at possimus recusandae accusantium nam quos iusto assumenda eligendi, corporis voluptatum maxime cumque numquam velit. Inventore velit esse voluptas iste soluta, eius
          illo sequi ab, molestias ut odit. Itaque molestiae illum at magni ad! Doloremque repellat ipsam possimus non quasi beatae eaque repellendus aliquam quibusdam et facilis, eos consequuntur labore! Officia fuga porro id dolor? Beatae
          ratione excepturi officiis asperiores obcaecati perspiciatis doloribus. Eum doloribus tempore recusandae voluptas asperiores illum reprehenderit quia perferendis itaque qui laboriosam, neque doloremque excepturi fuga placeat
          consequuntur cum, quisquam facere ullam sit ea necessitatibus? Recusandae repellat consectetur odio! Commodi facere nulla voluptatem accusamus, recusandae amet veniam mollitia in nam alias ea est eaque atque. Reiciendis eum
          reprehenderit debitis nostrum officiis, maxime atque, et nisi numquam quae consequuntur deleniti aliquid! Iusto, exercitationem? Ex necessitatibus eos velit iure cumque, hic, asperiores, nihil repellendus quia reiciendis
          obcaecati.
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}
