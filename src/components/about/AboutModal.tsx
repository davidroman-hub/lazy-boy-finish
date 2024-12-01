import { Box, Typography } from "@mui/material";
import { FC } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "#1B1B1B",
  border: "2px solid #d38e52",
  boxShadow: 24,
  overflow: "auto",
  overflowX: "hidden",
  //p: 4,
};

const photo1 =
  "https://res.cloudinary.com/dm8dxwvix/image/upload/v1731152837/lazyboy/DSC08989-min_yckxuo.jpg";
const photo2Training =
  "https://res.cloudinary.com/dm8dxwvix/image/upload/v1731156378/lazyboy/DSC07945-Enhanced-NR-min_eypotq.jpg";

const ContainPhotoAbout: FC<any> = () => {
  return (
    <Box sx={style}>
      <div className="first-photo-about">
        <div className="title-first-photo-about">
          Ronaldo Rodriguez (Lazy boy)
        </div>
      </div>

      <div className="biographie">
        <h2 className="h2-bio">Biografia</h2>
        <div className="info-contain-lazy">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>
      </div>

      <div className="about-modal">
        <div className="about-lazy-stuff">
          <h2 className="h2-bio">About</h2>
          <div className="about-contain-lazy block-animation">
            Nombre: Luis Ronaldo Rodriguez
            <br />
            Apodo: Lazy Boy
            <br />
            Edad: 25
            <br />
            Estatura: 168cm
            <br />
            Peso: 56kg
            <br />
            Record: 17-2-0
            <br />
            Promotion: UFC
            <br />
            Divisions: Peso mosca
            <br />
            Nationality: Mexicana
            <br />
            Gym: ADAM Coatzacoalcos
            <br />
          </div>
        </div>
        <div className="img-shoes-container">
          <img src={photo1} alt="lazy-shoes" />
        </div>
      </div>

      <div className="about-modal-trainning">
        <div className="about-lazy-stuff-trainning">
          <h2 className="h2-bio">Training</h2>
          <div className="about-contain-lazy-trainning block-animation">
            Traning: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam eos sint neque esse necessitatibus sapiente consequuntur
            illum sit non vitae ipsum exercitationem, nesciunt quisquam optio
            cumque labore sunt id. Corporis.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex
            rerum laboriosam beatae nostrum distinctio dicta modi! Vitae debitis
            hic voluptatibus ducimus. Consectetur voluptatum accusantium
            praesentium porro dolorum perspiciatis soluta!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            minus a facilis laboriosam aspernatur impedit iusto, voluptatibus
            obcaecati nulla! Pariatur voluptas officia quidem praesentium magnam
            iste optio molestias maiores tempora.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            atque quae. Unde, inventore. Temporibus, repellat delectus! Atque
            voluptate perspiciatis nam minus animi molestiae sint, libero quod,
            dolores nulla quisquam aut?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            cupiditate facere beatae veritatis voluptates culpa sed, a sapiente
            alias totam aliquam eveniet ratione magnam laborum in exercitationem
            nisi dolor praesentium?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            adipisci, explicabo deleniti aperiam porro impedit architecto, unde
            quidem quibusdam quod deserunt accusantium saepe nihil pariatur nemo
            minus at excepturi animi?
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus explicabo quibusdam mollitia ipsa nemo aspernatur
            adipisci temporibus fugit! Expedita magnam, vitae itaque modi
            nostrum repellendus commodi ea at voluptas impedit?
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            similique officia neque, dolores vitae culpa minus impedit
            repellendus delectus necessitatibus nostrum cumque? Possimus numquam
            illum laboriosam voluptate libero eum et.
          </div>
        </div>
        <div className="img-shoes-container">
          <img src={photo2Training} alt="lazy-shoes" />
        </div>
      </div>

      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  );
};

export default ContainPhotoAbout;
