import { type Metadata } from 'next'
import { Link } from '@/components/ui/link'
import { siteConfig, contactEmail, contact } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Privacidad',
  description: 'Conoce nuestra política de privacidad'
}

export default function PrivacyPage () {
  return (
    <>
      <section>
        <div className='container pt-spacing-9'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='f-display-2 font-medium pb-spacing-7 text-center'>
              Política de privacidad
            </h1>
            <div className='[&_h2]:f-heading-2 [&_h2]:mt-spacing-7 [&_h2]:pb-spacing-4 [&_p]:f-subhead-2 [&_p]:text-muted-foreground [&_p]:text-balance [&_p]:mt-spacing-4'>
              <p>
                Este sitio web es proporcionado por <b>{siteConfig.name}</b>. Tomamos con mucha seriedad
                la privacidad de los usuarios de nuestro sitio web y la seguridad
                de su información personal.
              </p>
              <p>
                Para su comodidad, este sitio web incluye enlaces a muchos otros sitios web, tanto
                internos como externos. Las políticas y los procedimientos de privacidad aquí
                descritos no se aplican a tales sitios; sugerimos comunicarse directamente
                con esos sitios para obtener información sobre sus políticas de recopilación
                y distribución de datos.
              </p>
              <p>
                La finalidad de esta política de privacidad es establecer los principios que
                rigen nuestro uso de la información personal que podamos obtener de usted. Al
                usar los sitios web, o registrarse como usuario de los servicios que brindamos,
                usted consiente a ese uso. Le pedimos que lea esta política de privacidad atentamente.
                Toda disputa que pudiera surgir sobre la privacidad quedará sujeta a esta política y
                a la notificación de protección de datos  incluidas en este sitio web.
              </p>
              <p>
                Podemos modificar nuestra política de privacidad oportunamente. Por lo tanto, le pedimos
                que la verifique ocasionalmente para asegurarse de conocer la versión más reciente que se
                aplicará cada vez que ingrese a este sitio web.
              </p>
              <h2>
                Recopilación y uso de información personal
              </h2>
              <p>
                <b>{siteConfig.name}</b> únicamente recopilará información de identificación personal,
                como su nombre  o dirección de correo electrónico, cuando ella sea enviada
                voluntariamente a este sitio web. <b>{siteConfig.name}</b> y las empresas que contratamos
                utilizarán esta información para cumplir con su solicitud de información
                o para otro fin que se le informará cuando envíe su información.
              </p>
              <p>
                Es posible que oportunamente consultemos esa información para comprender mejor sus necesidades
                y cómo podemos mejorar nuestros servicios. Podemos usar esa información para comunicarnos con usted.
                No transmitiremos de otro modo la información de identificación personal que nos proporcione en este
                sitio web a un tercero a menos que le informemos lo contrario.
              </p>
              <h2>
                Recopilación y uso de información no personal
              </h2>
              <p>
                Al igual que sucede con muchas organizaciones comerciales, supervisamos el uso de este sitio web
                mediante la recopilación de información global. Podemos recopilar automáticamente información no
                personal sobre usted, como el tipo de navegador web que utiliza, las páginas que visita o el sitio
                web que lo dirigió a nuestro sitio. Usted no puede ser identificado a partir de esta información,
                la cual se usa únicamente para ayudarnos a brindarle un servicio eficaz en este sitio web.
              </p>
              <h2>
                Uso de cookies
              </h2>
              <p>
                Las cookies son pequeños archivos que se envían a su navegador web y que se almacenan en el disco
                duro de su computadora. Estas le permiten trasladar la información a través de nuestro sitio sin
                tener que volver a ingresarla; además, nos permiten analizar el tráfico web y mejorar nuestros
                servicios en línea. No pueden usarse para identificarlo. Puede configurar su navegador web para
                que lo notifique sobre las solicitudes de instalación de cookies o para rechazarlas completamente.
                Usted puede borrar los archivos que contengan cookies; tales archivos se almacenan
                como parte de su navegador web.
              </p>
              <h2>
                Menores de 18 años
              </h2>
              <p>
                Este sitio web no está destinado ni diseñado para atraer a menores de 18 años. No recolectamos
                deliberadamente datos de identificación personal de o sobre personas menores de 18 años. Si usted es
                menor de 18 años y desea formular una pregunta o usar este sitio de cualquier forma que requiera que
                envíe su información personal, pídale a su padre o tutor que lo haga en su nombre.
              </p>
              <h2>
                Seguridad de los datos personales
              </h2>
              <p>
                Hemos implementado tecnologías y políticas con el objetivo de proteger su información del acceso no
                autorizado y del uso indebido y actualizaremos estas medidas según corresponda a medida que las nuevas
                tecnologías estén disponibles.
              </p>
              <h2>
                Exactitud de la información personal
              </h2>
              <p>
                <b>{siteConfig.name}</b> realiza esfuerzos razonables para que la Información personal
                que tiene en su poder o bajo su control, que se usa constantemente, sea exacta, completa, actualizada
                y pertinente, basada en la información más reciente que tengamos disponible.
              </p>
              <p>
                Es responsabilidad de cada persona asegurarse de que la Información personal relacionada con ella sea
                exacta, completa y esté actualizada.
              </p>
              <h2>
                Acceso a la información personal
              </h2>
              <p>
                Para solicitar acceso a la Información personal que tenemos sobre usted, requerimos que envíe su
                solicitud por escrito a la dirección de correo electrónico o dirección postal indicada a continuación
                (en la sección Cómo comunicarse con nosotros). Usted podrá acceder a su Información personal y
                corregirla, modificarla o eliminarla cuando sea inexacta, salvo en los siguientes casos:
              </p>
              <ul className='[&>li]:mt-spacing-4 list-disc pl-6'>
                <li>
                  <p>
                    Los inconvenientes o el gasto de brindarle acceso serían desproporcionados respecto de los riesgos
                    a su privacidad en el caso en cuestión;
                  </p>
                </li>
                <li>
                  <p>
                    Brindarle acceso a su Información personal posiblemente revelaría Información personal sobre terceros;
                  </p>
                </li>
                <li>
                  <p>
                    Divulgar la información revelaría información comercial confidencial
                    de <b>{siteConfig.name}</b> o sus clientes.
                  </p>
                </li>
              </ul>
              <p>
                Haremos nuestros mejores esfuerzos para brindarle la Información personal solicitada dentro de
                los 30 días de haber recibido su solicitud de acceso. Si no podemos cumplir con su solicitud,
                le proporcionaremos una explicación por escrito del motivo para denegarle su solicitud de acceso.
              </p>
              <h2>
                Cómo comunicarse con nosotros
              </h2>
              <p>
                Las preguntas sobre esta Política de privacidad y las solicitudes de acceso deben dirigirse a:
              </p>
              <p>
                <b>{siteConfig.name}</b>, <Link href={contact[0]!.address.url}>{contact[0]!.address.name}</Link> O
                al correo: <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
              </p>
              <p>
                <b>{siteConfig.name}</b> se compromete a trabajar con las personas para obtener una
                resolución justa de toda queja o disputa sobre la privacidad y la información personal. El compromiso
                de <b>{siteConfig.name}</b> con la privacidad queda demostrado y documentado
                por nuestra adhesión a las leyes, códigos y normas industriales vigentes. Si tiene alguna
                queja sobre nuestro cumplimiento de esta Política de privacidad , debe comunicarse con nosotros
                a la dirección indicada anteriormente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
