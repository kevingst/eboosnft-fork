import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import Heading2 from "../../components/typography/Heading2";
import Lead from "../../components/typography/Lead";

function TreasuryWallet({ href, address, value }) {
  return (
    <a
      className="inline-flex items-center justify-center px-1 h-10 bg-green-400 rounded-xl text-green-900 font-bold shadow-lg shadow-green-500/50"
      href={href}
    >
      <div className="ml-2 inline-flex items-center">
        <FontAwesomeIcon icon={faWallet} />
      </div>
      <div className="px-2">{value} ETH</div>
      <div className="bg-green-300 h-8 rounded-lg px-2 flex items-center justify-center ml-1 shadow">
        {address}
      </div>
    </a>
  );
}

export default function Treasuries() {
  return (
    <>
      <div className="px-8 max-w-screen-xl mx-auto">
        <div className="text-center flex items-center flex-col mb-8 lg:mb-16">
          <div className="text-zinc-200 text-4xl lg:text-6xl font-black mb-4 lg:mb-8 max-w-sm md:max-w-none">
            C&apos;est la communauté qui décide
          </div>
          <div className="text-zinc-400 text-xl lg:text-2xl max-w-2xl lg:max-w-3xl">
            Une trésorerie communautaire a été mise en place et protégé par un multi-sig, constitué de 7 keys keeper.
          </div>
        </div>
        <div className="w-full gap-8">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-500 rounded-2xl p-12 lg:p-16 text-rose-50 space-y-4 lg:space-y-8 shadow-2xl shadow-indigo-600/50">
            <div className="flex flex-row items-end space-x-2">
              <Heading2>La Trésorerie</Heading2>
              <TreasuryWallet
                address="0xCe4...4864"
                href="https://etherscan.io/address/0xCe4a69B7Bf70C803e47E54D5E805ff4DbF954864"
                value="7.192"
              />
            </div>
            <Lead>
              Cette trésorerie finance des initiatives dans la vraie vie et le
              métaverse. Ces activités sont proposées par la communauté pour la
              divertir et l&apos;agrandir (évènements, merchandising, etc...).
            </Lead>
            <Lead>
              Un propriétaire de Eboo peut à tout moment suggèrer un projet
              détaillé sur le Discord, si celui-ci récolte assez
              d&apos;engagement il est soumis aux votes des membres sur la
              plateforme snapshot.
            </Lead>
            <Lead>
              La trésorerie est également composé d&apos;un musée des Eboos. Un lieu dans lequel sont collectionnés des
              NFT présentant un intérêt pour la communauté. Le musée permet aux
              propriétaires d&apos;Eboos de pouvoir profiter des avantages de
              différents projets sans avoir à en dépenser le prix.
            </Lead>
            <Lead>
              Un possesseur d&apos;Eboos peut à tout
              moment suggérer un projet NFT détaillé sur le Discord, si celui-ci
              récolte assez d&apos;engagement, il est soumis aux votes des
              membres sur la plateforme snapshot.
            </Lead>
          </div>
          {/* <div className="bg-gradient-to-br from-red-700 to-rose-500 rounded-2xl p-12 lg:p-16 text-rose-50 space-y-4 lg:space-y-8 shadow-2xl shadow-rose-600/50">
            <div className="space-y-2">
              <Heading2>Le Musée</Heading2>
              <TreasuryWallet
                address="0x4a...BE79"
                href="https://etherscan.io/address/0x4a6A3953D487Fae249C5dCe5F3367B1D76A0BE79"
                value="4.447"
              />
            </div>
            <Lead>
              Le musée des Eboos est un lieu dans lequel sont collectionnés des
              NFT présentant un intérêt pour la communauté. Le musée permet aux
              propriétaires d&apos;Eboos de pouvoir profiter des avantages de
              différents projets sans avoir à en dépenser le prix.
            </Lead>
            <Lead>
              Au même titre que Le Club, un possesseur d&apos;Eboos peut à tout
              moment suggérer un projet NFT détaillé sur le Discord, si celui-ci
              récolte assez d&apos;engagement, il est soumis aux votes des
              membres sur la plateforme snapshot.
            </Lead>
          </div> */}
        </div>
      </div>
    </>
  );
}
