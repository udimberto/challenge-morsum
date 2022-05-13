import { Global, css } from '@emotion/react'
import theme from './theme'

const swiper = {
  horizontal: {
    spacing: 16,
  },
  navigation: {
    size: 50,
  },
  progress: {
    height: 4,
  },
}

export const LibsOverridesStyles = () => (
  <Global
    styles={css`
      /**
       * Swiper
       */
      :root body {
        --swiper-theme-color         : ${theme.palette.primary.main};
        --swiper-horizontal-spacing-y: ${swiper.horizontal.spacing}px;
        --swiper-horizontal-spacing-x: ${swiper.horizontal.spacing}px;
        --swiper-navigation-size     : ${swiper.navigation.size}px;
      }

      .swiper {
        &.swiper-horizontal {
          margin-left : calc(var(--swiper-horizontal-spacing-x) * -1);
          margin-right: calc(var(--swiper-horizontal-spacing-x) * -1);
          padding     :
            var(--swiper-horizontal-spacing-y)
            var(--swiper-horizontal-spacing-x)
            calc(var(--swiper-horizontal-spacing-y) * 2)
          ;

          &:hover {
            .swiper-button {
              &-prev,
              &-next {
                opacity: 1;
              }

              &-prev {
                left: calc(var(--swiper-horizontal-spacing-x) * 2);
              }

              &-next {
                right: calc(var(--swiper-horizontal-spacing-x) * 2);
              }
            }
          }

          .swiper {
            &-pagination {
              bottom: 0;
            }

            &-button {
              &-prev,
              &-next {
                z-index: 20;
                opacity: 0;
                width  : var(--swiper-navigation-size);
                height : var(--swiper-navigation-size);

                border-radius   : 50%;
                box-shadow      : 0 0 var(--swiper-horizontal-spacing-x) ${theme.palette.divider};
                background-color: ${theme.palette.common.white};

                filter    : none;
                transition: all ease-in-out 0.3s;

                &:before,
                &:after {
                  --swiper-navigation-size: ${swiper.navigation.size / 2}px;
                }

                &.swiper-button-disabled {
                  opacity: 0;
                  filter : grayscale(1);
                }
              }

              &-prev {
                padding-right: 3px;
                left: -100%;
              }

              &-next {
                padding-left: 3px;
                right: -100%;
              }
            }
          }
        }
      }
    `}
  />
)
