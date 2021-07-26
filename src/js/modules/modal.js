export default function modal() {
    const filterBtn = document.querySelector('.filter'),
          modal = document.querySelector('.modal');

          filterBtn.addEventListener('click', event => {
              event.preventDefault();
              modal.classList.add('modal_active');
          });

          document.addEventListener('click', event => {
            if(event.target === modal) {
                modal.classList.remove('modal_active');
            }
          });
}