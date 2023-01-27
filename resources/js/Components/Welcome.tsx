import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { User } from '@/types';

export default function Welcome(props: any) {
  console.log('registration', props.godsons);

  return (
    <div>
      <div className="p-6 sm:px-10 bg-white border-b border-slate-200">
        <div>
          <ApplicationLogo className="block h-12 w-auto" />
        </div>

        <div className="">
          <h3 className="mt-8 text-2xl">
            Salut <span className="font-bold ">{props.user.full_name},</span>
          </h3>
          <p className="text-slate-500">
            Bienvenue dans le tableau de bord de IAIPM Parrainage
          </p>
        </div>

        <div className="mt-6">
          {props.student.registration?.mentor && (
            <>
              <h5 className="text-slate-900 mb-3 text-2xl font-bold">
                Votre Parrain
              </h5>
              <p className="border-b my-2 w-full"></p>
              <div className={`grid grid-cols-2 md:grid-cols-2 gap-6`}>
                <div className="p-3 rounded-md border shadow-md">
                  <h4 className="text-xl md:text-2xl text-slate-900 mb-1 font-medium capitalize">
                    {props.student.registration?.mentor?.full_name}
                  </h4>
                  <div className="">
                    <ul>
                      <li>
                        Niveau :{' '}
                        <span className="text-slate-900">
                          {
                            props.student.registration?.mentor?.registration
                              .level.name
                          }
                        </span>
                      </li>
                      <li>
                        Telephone :{' '}
                        <span className="text-slate-900">
                          {
                            props.student.registration?.mentor?.registration
                              .student.phone
                          }
                        </span>
                      </li>
                      <li>
                        Adresse Email :{' '}
                        <span className="text-slate-900">
                          {
                            props.student.registration?.mentor?.registration
                              .student.email
                          }
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {props.godsons.length && (
            <>
              <h5 className="text-slate-900 mb-3 mt-10 text-2xl font-bold">
                Vos Filleuls
              </h5>
              <p className="border-b my-2 w-full"></p>
              <div className={`grid grid-cols-2 md:grid-cols-2 gap-6`}>
                { props.godsons.map((godson: User) => (
                    <div key={godson.id} className="p-3 rounded-md border shadow-md">
                    <h4 className="text-xl md:text-2xl text-slate-900 mb-1 font-medium capitalize">
                      {godson.full_name}
                    </h4>
                    <div className="">
                      <ul>
                        <li>
                          Niveau :{' '}
                          <span className="text-slate-900">
                            {
                              godson.registration
                              ?.level.name
                            }
                          </span>
                        </li>
                        <li>
                          Telephone :{' '}
                          <span className="text-slate-900">
                            {
                              godson.phone
                            }
                          </span>
                        </li>
                        <li>
                          Adresse Email :{' '}
                          <span className="text-slate-900">
                            {
                              godson.email
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))

                }
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
